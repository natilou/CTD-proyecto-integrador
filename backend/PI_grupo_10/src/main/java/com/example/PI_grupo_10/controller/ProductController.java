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

    @GetMapping("/{productId}/images")
    public ResponseEntity<List<Image>> buscarPorProductId(@PathVariable Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(imageService.buscarPorProductId(productId));
    }

    @GetMapping("/{productId}/features")
    public ResponseEntity<List<Feature>> getAllFeaturesByProductId(@PathVariable(value = "productId") Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(featureService.findByProductId(productId));
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
    //----------------------------------------------**********************--------------------------------
    /*
    @Component
    public class DataSeeder implements ApplicationListener<ContextRefreshedEvent> {
        private final UserRepository userRepository;

        private final MovieRepository movieRepository;

        public DataSeeder(UserRepository userRepository, MovieRepository movieRepository) {
            this.userRepository = userRepository;
            this.movieRepository = movieRepository;
        }

        @Override
        public void onApplicationEvent(ContextRefreshedEvent event) {
            Movie movie1 = new Movie("Movie 1", "Movie 1 description", 2020);
            Movie movie2 = new Movie("Movie 2", "Movie 2 description", 2021);

            Movie createdMovie1 = movieRepository.save(movie1);
            Movie createdMovie2 = movieRepository.save(movie2);

            User user = new User("user@email.com", "John Doe");

            Set<Movie> movies = new HashSet<>();
            movies.add(createdMovie1);
            movies.add(createdMovie2);

            user.setMovies(movies);

            User createdUser = userRepository.save(user);

            createdUser.getMovies().forEach(System.out::println);
        }
    }
    */
/*------------------------------------------------------------------------------------------
    @PostMapping("/addFeature")
    public void agregar(@RequestParam ("productsFeatures") List<String> productsFeatures){
        log.info("Se reciben los datos de un nuevo producto:" + productsFeatures);


        //featureService.addProductFeature((Integer) productId, (Integer) featureId);
        //return (ResponseEntity) ResponseEntity.ok();
    }
------------------------------------------------------------------------------------------*/
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

}
