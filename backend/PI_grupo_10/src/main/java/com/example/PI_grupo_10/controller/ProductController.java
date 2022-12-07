package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.*;
import com.example.PI_grupo_10.repository.FeatureRepository;
import com.example.PI_grupo_10.repository.ProductFeatureRepository;
import com.example.PI_grupo_10.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static java.lang.Integer.parseInt;
import static java.lang.Integer.valueOf;

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
//LO COMENTE HASTA ENCONTRAR LA SOLUCION**********************************
    @GetMapping("/{productId}/features")
    public ResponseEntity<List> getAllFeaturesByProductId(@PathVariable(value = "productId") Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(featureService.findByProductId(productId));
    }
//REVISAR SI CONVIENE CON EL FE
    @GetMapping("/{productId}/featuresb")
    public ResponseEntity<List> getAllFeaturesByProductIdB(@PathVariable(value = "productId") Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productFeatureService.findByProductId(productId));
    }
////////////////////////////////////////////////************************************

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

//-------------------------------FALTA LISTADO DE IMAGES-------------------
    @PostMapping
    public ResponseEntity<Product> agregar(@RequestBody NewProduct newProduct){

        Product productNew = new Product();

        productNew.setTitle(newProduct.getTitle());

        Category category = categoryService.buscar(newProduct.getCategoryId());
        productNew.setCategory(category);

        productNew.setAddress(newProduct.getAddress());

        City city = cityService.buscar(newProduct.getCityId());
        productNew.setCity(city);

        productNew.setDescription(newProduct.getDescription());

        productNew.setCoverImageUrl(newProduct.getCoverImageUrl());

        productNew = productService.agregar(productNew);

        productFeatureService.agregarFeaturesAProduct(productNew.getId(), newProduct.getFeaturesId());

        for (int i = 0; i < newProduct.getPolicies().size(); i++) {
            Policy policy = new Policy();

            policy.setProduct(productNew);

            policy.setDescription(newProduct.getPolicies().get(i).getDescription());

            //policy.setName(newProduct.getPolicies().get(i).getName());

            Type type = typeService.buscar(newProduct.getPolicies().get(i).getTypeId());

            policy.setType(type);

            policyService.agregar(policy);
        }
//------------------------------------------------------------------------
        /*
        MultipartFile multipart = newProduct.getImages().get(0);

        String fileName = multipart.getOriginalFilename();

        //System.out.println("Description: " + description);
        log.info("filename: " + fileName);

        //String message = "";

        //uuId
        //@Transactional para que se cancelen los inputs

        try {
            S3Util.uploadFile(fileName, multipart.getInputStream());
            log.info("Your file has been uploaded successfully!");
            //message = "Your file has been uploaded successfully!";
        } catch (Exception ex) {
            log.info("Error uploading file: " + ex.getMessage());
            //message = "Error uploading file: " + ex.getMessage();
        }
        */

//------------------------------------------------------------------------
        //model.addAttribute("message", message);

        return ResponseEntity.ok(productNew);
    }
//*********************************************************************************************


//----------------------------------------------**********************--------------------------------
    //Agregar validación para que sólo puedan hacerlo usuarios ADMIN
    //
/*    @PostMapping
    public ResponseEntity<Product> agregar(@RequestBody Product product, @RequestParam ("features") List<String> features){
        log.info("Se reciben los datos de un nuevo producto:" + product);
        log.info("Se recibe un listado de caracteristicas:" + features);
        //armar el producto antes de enviar al service
        //intentar resolver con una QUERY en el Repository****************************
        Category category = categoryService.buscar(product.getCategory().getId());
        product.setCategory(category);
        City city = cityService.buscar(product.getCity().getId());
        product.setCity(city);

        Set<Optional<Feature>> productFeatures = new HashSet<>();
        //students.forEach((n) -> print(n));
        Optional<Feature> fe;
        for (int i = 0; i < features.size(); i++) {
            fe=featureRepository.findById(parseInt(features.get(i)));
            productFeatures.add(fe);
        }

        product.setFeatures(productFeatures);

        Product newProduct = productService.agregar(product);

        //students.forEach((n) -> print(n));
        //features.forEach((n) -> featureService.addProductFeature(product.getId(), (Integer) n));

        //return ResponseEntity.ok(productService.agregar(product));
        return ResponseEntity.ok(newProduct);
    }

 */

    //Agregar validación para que sólo puedan hacerlo usuarios ADMIN
    //METODO PARA ACTUALIZAR PRODUCTO
/*    @PutMapping
    public ResponseEntity<Product> actualizar(@RequestBody Product product){

        ResponseEntity<Product> response;

        if (product.getId() != 0 && productService.buscar(product.getId()) != null) {
            response = ResponseEntity.ok(productService.actualizar(product));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }
********************/
    @GetMapping("/cities/{cityId}")
    public ResponseEntity<List<Product>> buscarPorCityId(@PathVariable Integer cityId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.buscarPorCityId(cityId));
    }

    @GetMapping("/categories/{categoryId}")
    public ResponseEntity<List<Product>> buscarPorCategoryId(@PathVariable Integer categoryId) throws ResourceNotFoundException {
        return ResponseEntity.ok(productService.buscarPorCategoryId(categoryId));
    }

    @GetMapping("/dates")
    public List<Product> obtenerProductosPorFechasDisponibles(@RequestParam String initialDate, @RequestParam String endDate) throws ParseException {
        log.info("Se reciben los datos:" + initialDate +" "+endDate);
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        Date iDate = simpleDateFormat.parse(initialDate);
        Date eDate = simpleDateFormat.parse(endDate);
        log.info("Se convierten los datos:" + iDate +" "+eDate);
        return productService.obtenerProductosPorFechasDisponibles(iDate, eDate);
    }

//AGREGAR QUE LOS PARAMS NO SON OBLIGATORIOS: puede recibir Ciudad o fechasLímite o ambas
    @GetMapping("/datescity")
    public List<Product> obtenerProductosPorFechasDisponiblesCiudad(@RequestParam String initialDate, @RequestParam String endDate, @RequestParam Integer cityId) throws ParseException {
        log.info("Se reciben los datos:" + initialDate +" "+endDate+" "+cityId);
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        Date iDate = simpleDateFormat.parse(initialDate);
        Date eDate = simpleDateFormat.parse(endDate);
        log.info("Se convierten los datos:" + iDate +" "+eDate);
        return productService.obtenerProductosPorFechasDisponiblesCiudad(iDate, eDate, cityId);
    }

}
