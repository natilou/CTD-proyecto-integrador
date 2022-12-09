package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.*;
import com.example.PI_grupo_10.repository.FeatureRepository;
import com.example.PI_grupo_10.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {


    @Autowired
    private ProductService productService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private FeatureService featureService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CityService cityService;

    @Autowired
    private FeatureRepository featureRepository;

    @Autowired
    private ProductFeatureService productFeatureService;

    @Autowired
    private PolicyService policyService;

    @Autowired
    private TypeService typeService;

    @GetMapping("/{productId}/images")
    public ResponseEntity<List<Image>> buscarPorProductId(@PathVariable Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(imageService.buscarPorProductId(productId));
    }

    @GetMapping("/{productId}/features")
    public ResponseEntity<List> getAllFeaturesByProductId(@PathVariable(value = "productId") Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productFeatureService.findByProductId(productId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> listarTodos(){
        return ResponseEntity.ok(productService.listarTodos());
    }

    @GetMapping
    public ResponseEntity<List<Product>> listarOchoProductos(){
        return ResponseEntity.ok(productService.listarOchoProductos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> buscar(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.buscar(id));
    }

    @GetMapping("/prueba/{id}")
    public ResponseEntity ObtenerProducto(@PathVariable int id){
        var product = this.productService.obtenerProduct(id);

        if (product == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product no encontrado");
        }

        return ResponseEntity.ok(product);
    }

    @PostMapping
    public ResponseEntity<Product> agregarMejorado(@RequestBody NewProduct newProduct){
        return new ResponseEntity<>(productService.agregar(newProduct), HttpStatus.CREATED);
    }

//*********************************************************************************************
    //Agregar validación para que sólo puedan hacerlo usuarios ADMIN
    //METODO PARA ACTUALIZAR PRODUCTO
    /*
    @PutMapping
    public ResponseEntity<Product> actualizar(@RequestBody Product product){

        ResponseEntity<Product> response;

        if (product.getId() != 0 && productService.buscar(product.getId()) != null) {
            response = ResponseEntity.ok(productService.actualizar(product));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
    */
//***********************************************************************************************

    @GetMapping("/cities/{cityId}")
    public ResponseEntity<List<Product>> buscarPorCityId(@PathVariable Integer cityId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.buscarPorCityId(cityId));
    }

    @GetMapping("/categories/{categoryId}")
    public ResponseEntity<List<Product>> buscarPorCategoryId(@PathVariable Integer categoryId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.buscarPorCategoryId(categoryId));
    }

    ///NO VA MÁS//-------------------************-----------------*********---------------******---------
    @GetMapping("/dates")
    public List<Product> obtenerProductosPorFechasDisponibles(@RequestParam String initialDate, @RequestParam String endDate) throws ParseException {
        log.info("Se reciben los datos:" + initialDate +" "+endDate);
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        Date iDate = simpleDateFormat.parse(initialDate);
        Date eDate = simpleDateFormat.parse(endDate);
        log.info("Se convierten los datos:" + iDate +" "+eDate);
        return productService.buscarPorFechasDisponibles(iDate, eDate);
    }

//Puede recibir Ciudad o fechas Límite o las 3
    @GetMapping("/availability")
    public List<Product> buscarPorFechasDisponiblesCiudad(@RequestParam(required = false) String initialDate, @RequestParam(required = false) String endDate, @RequestParam(required = false) Integer cityId) throws ParseException, ResourceNotFoundException {
        log.info("Se reciben los datos: fechaInicio: " + initialDate +", fechaFinal: "+endDate+", cityID: "+cityId);

        if(cityId != null && initialDate == null && endDate == null)
        {
            return productService.buscarPorCityId(cityId);
        }else if(cityId==null && initialDate != null && endDate != null){
            String pattern = "yyyy-MM-dd";
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
            Date iDate = simpleDateFormat.parse(initialDate);
            Date eDate = simpleDateFormat.parse(endDate);
            log.info("Se convierten los datos:" + iDate +" "+eDate);
            return productService.buscarPorFechasDisponibles(iDate,eDate);
        }else //if (cityId != null && initialDate != null && endDate != null)
        {
            String pattern = "yyyy-MM-dd";
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
            Date iDate = simpleDateFormat.parse(initialDate);
            Date eDate = simpleDateFormat.parse(endDate);
            log.info("Se convierten los datos:" + iDate +" "+eDate);
            return productService.buscarPorFechasDisponiblesYCiudad(iDate, eDate, cityId);
        }
    }

    /*-------------------------------------------------------------------------------------------*/

    //////////////////////ENDPOINTS DE PRUEBA///////////////////////////////////////////////////////

    /*-------------------------------------------------------------------------------------------*/

    ////ENDPOINT DE PRUEBA////////////////////////////////////
    @PostMapping("/uploadvarias")
    public String handleUploadForm(@RequestParam("files") List<MultipartFile> multiparts) {
        String message = "";
        for (int i = 0; i < multiparts.size(); i++) {
            String fileName = multiparts.get(i).getOriginalFilename();

            System.out.println("filename: " + fileName);

            try {
                S3Util.uploadFile(fileName, multiparts.get(i).getInputStream());
                message = "Se cargaron todas tus imágenes";
            } catch (Exception ex) {
                message = "Quizás se cargaron algunas imágenes pero alguna dio Error uploading file: " + ex.getMessage();
            }
        }

        return message;
    }

    ////ENDPOINT DE PRUEBA////////////////////////////////////
    @PostMapping("/uploadunaimagenabd")
    public Image handleUploadFormImagenBd(@RequestBody Image image) {
        image.setProduct(productService.buscar(17));
        return imageService.agregar(image);
    }

    ////ENDPOINT DE PRUEBA////////////////////////////////////
    @PostMapping("/uploaduna")
    public String handleUploadForm(@RequestParam("file") MultipartFile multipart) {
        String fileName = multipart.getOriginalFilename();

        System.out.println("filename: " + fileName);

        String message = "";

        try {
            S3Util.uploadFile(fileName, multipart.getInputStream());
            message = "Se cargó una imagen";
        } catch (Exception ex) {
            message = "Error uploading file: " + ex.getMessage();
        }

        return message;
    }

    ////ENDPOINT DE PRUEBA////////////////////////////////////
    @DeleteMapping("/borraruna")
    public String deleteImageS3(@RequestParam("FileName") String filename) throws IOException {
        S3Util.deleteFile(filename);
        return "Se borró la imagen: " + filename;
    }

    ////ENDPOINT DE PRUEBA////////////////////////////////////
    @DeleteMapping("/borrarvarias")
    public List<String> deleteImageS3(@RequestParam("FilesNames") List<String> filename) throws IOException {
        List<String> message = new ArrayList<>();
        for (int i = 0; i < filename.size(); i++) {

            S3Util.deleteFile(filename.get(i));
            message.add("Se borró: " + filename.get(i));
        }
        return message;
    }

}
