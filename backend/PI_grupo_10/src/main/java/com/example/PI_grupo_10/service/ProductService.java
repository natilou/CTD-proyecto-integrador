package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.*;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.model.dto.ProductDto;
import com.example.PI_grupo_10.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.*;

@Slf4j
@Service
public class ProductService {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CityService cityService;

    @Autowired
    private ImageService imageService;

    @Autowired
    private PolicyService policyService;

    @Autowired
    private ProductFeatureService productFeatureService;

    @Autowired
    private TypeService typeService;

    private ProductRepository productRepository;
    private CityRepository cityRepository;
    private CategoryRepository categoryRepository;
    private FeatureRepository featureRepository;
    private ProductFeatureRepository productFeatureRepository;
    //private static final Logger logger = Logger.getLogger(ProductService.class);

    //Inyectar la dependencia
    public ProductService(ProductRepository productRepository, CityRepository cityRepository, CategoryRepository categoryRepository, FeatureRepository featureRepository, ProductFeatureRepository productFeatureRepository) {
        this.productRepository = productRepository;
        this.cityRepository = cityRepository;
        this.categoryRepository = categoryRepository;
        this.featureRepository = featureRepository;
        this.productFeatureRepository = productFeatureRepository;
    }

    //------------------------------------------------------------------

    public ProductDto obtenerProduct(int id) {
        var product = this.productRepository.findById(id);

        if (!product.isPresent())
            return null;

        return new ProductDto(product.get());
    }


    //------------------------------------------------------------------

    public Product buscar(Integer id) {
        Product product = null;
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            product = optionalProduct.get();
            log.info("Se encontró el producto con el id: " + id);
        }
        return product;
    }

    public List<Product> listarTodos() {
        log.info("Se buscan todos los productos");
        //return productRepository.findTodosLosProductos();
        return productRepository.findAll();
    }

    public List<Product> listarOchoProductos() {
        log.info("Se buscan 8 productos random");
        return productRepository.findTop8();
    }

    public Product agregar(NewProduct newProduct) {
//////crear nuevo producto//////////////////////////////////////////////////////////////////
        Product createdProduct = new Product();

        createdProduct.setTitle(newProduct.getTitle());

        Category category = categoryService.buscar(newProduct.getCategoryId());
        createdProduct.setCategory(category);

        createdProduct.setAddress(newProduct.getAddress());

        City city = cityService.buscar(newProduct.getCityId());
        createdProduct.setCity(city);

        createdProduct.setDescription(newProduct.getDescription());

        createdProduct.setCoverImageUrl(newProduct.getCoverImageUrl());

        log.info("Se crea el producto: " + createdProduct);

        createdProduct = productRepository.save(createdProduct);

//////agregar las features y product_id a la tabla intermedia ProductFeatures/////////////////
        this.agregarFeaturesAProduct(createdProduct.getId(), newProduct.getFeaturesId());

//////////////agregar las políticas a la tabla Policies///////////////
        this.agregarPolicies(newProduct.getPolicies(), createdProduct);

//////////////////////subir cada imagen a la tabla Images///////////////////
        this.agregarImages(newProduct.getImages(), createdProduct);

        return createdProduct;
    }

    public void agregarFeaturesAProduct(Integer productId, List<String> featuresId){
        productFeatureService.agregarFeaturesAProduct(productId, featuresId);
    }

    public void agregarPolicies(List<NewPolicy> policies, Product createdProduct){

        for (int i = 0; i < policies.size(); i++) {
            Policy policy = new Policy();

            policy.setProduct(createdProduct);

            policy.setDescription(policies.get(i).getDescription());

            Type type = typeService.buscar(policies.get(i).getTypeId());

            policy.setType(type);

            policyService.agregar(policy);
        }
    }

    public void agregarImages(List<Image> images, Product createdProduct){
        for (int i = 0; i < images.size() ; i++) {
            images.get(i).setProduct(createdProduct);
            imageService.agregar(images.get(i));
        }
    }

    public Product actualizar(Product p) {
        log.info("Se actualiza el product con el id: " + p.getId());
        return productRepository.save(p);
    }

    public List<Product> buscarPorCityId(Integer cityId) throws ResourceNotFoundException {
        if (!cityRepository.existsById(cityId)) {
            throw new ResourceNotFoundException("Not found City with id = " + cityId);
        } else {
            log.info("Se buscan todos los productos con el cityId: " + cityId);
            return productRepository.findByCityId(cityId);
        }
    }

    public List<Product> buscarPorCategoryId(Integer categoryId) throws ResourceNotFoundException {
        if (!categoryRepository.existsById(categoryId)) {
            throw new ResourceNotFoundException("Not found Category with id = " + categoryId);
        } else {
            log.info("Se buscan todos los productos con el categoryId: " + categoryId);
            return productRepository.findByCategoryId(categoryId);
        }
    }

    public List<Product> buscarPorFechasDisponibles(Date iDate, Date eDate){
        return productRepository.findByAvailableDate(iDate,eDate);
    }

    public List<Product> buscarPorFechasDisponiblesYCiudad(Date iDate, Date eDate, Integer cityId){
        return productRepository.findByAvailableDateCity(iDate,eDate,cityId);
    }

}


