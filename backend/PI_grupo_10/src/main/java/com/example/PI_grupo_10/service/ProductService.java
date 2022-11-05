package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Category;
import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.model.Feature;
import com.example.PI_grupo_10.model.Product;
import com.example.PI_grupo_10.repository.CategoryRepository;
import com.example.PI_grupo_10.repository.CityRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService {

    private ProductRepository productRepository;
    private CityRepository cityRepository;
    private CategoryRepository categoryRepository;
    private static final Logger logger = Logger.getLogger(ProductService.class);

    //Inyectar la dependencia
    public ProductService(ProductRepository productRepository, CityRepository cityRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.cityRepository = cityRepository;
        this.categoryRepository = categoryRepository;
    }

    public Product buscar(Integer id){
        Product product = null;
        Optional<Product> optionalProduct= productRepository.findById(id);
        if (optionalProduct.isPresent()){
            product = optionalProduct.get();
            logger.info("Se encontró el producto con el id: " + id);
        }
        return product;
    }

    public Set<Feature> buscarFeatures(Integer id){
        Product product = null;
        Optional<Product> optionalProduct= productRepository.findById(id);
        if (optionalProduct.isPresent()){
            product = optionalProduct.get();
            logger.info("Se encontró el producto con el id: " + id);
        }
        return product.getFeatures();
    }

    public List<Product> listarTodos(){
        logger.info("Se buscan todos los productos");
        return productRepository.findAll();
    }

    public Product agregar(Product p){
        logger.info("Se crea el producto: " + p);

        return productRepository.save(p);
    }

    public List<Product> buscarPorCityId(Integer cityId) throws ResourceNotFoundException {
        if (!cityRepository.existsById(cityId)) {
            throw new ResourceNotFoundException("Not found City with id = " + cityId);
        }else {
            logger.info("Se buscan todos los productos con el cityId: " + cityId);
            return productRepository.findByCityId(cityId);
        }
    }

    public List<Product> buscarPorCategoryId(Integer categoryId) throws ResourceNotFoundException {
        if (!categoryRepository.existsById(categoryId)) {
            throw new ResourceNotFoundException("Not found Category with id = " + categoryId);
        } else {
            logger.info("Se buscan todos los productos con el categoryId: " + categoryId);
            return productRepository.findByCategoryId(categoryId);
        }
    }

/*
    public Category buscarCategory(Integer id) throws ResourceNotFoundException {
        if (!categoryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Not found Category with id = " + id);
        } else {
            logger.info("Se buscan todos los productos con el categoryId: " + id);
            return productRepository.getCategory(id);
        }
    }
*/
}
