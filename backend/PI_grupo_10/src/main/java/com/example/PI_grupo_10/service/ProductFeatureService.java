package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Feature;
import com.example.PI_grupo_10.model.Product;
import com.example.PI_grupo_10.model.ProductFeature;
import com.example.PI_grupo_10.model.ProductFeatureKey;
import com.example.PI_grupo_10.repository.FeatureRepository;
import com.example.PI_grupo_10.repository.ProductFeatureRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class ProductFeatureService {
/*
    @Autowired
    private ProductService productService;
*/
    private ProductFeatureRepository productFeatureRepository;
    private FeatureRepository featureRepository;
    private ProductRepository productRepository;

    public List<Optional<Feature>> findByProductId(Integer productId) throws ResourceNotFoundException {
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }

        List<Integer> featuresId = productFeatureRepository.findByProductId(productId);

        List<Optional<Feature>> productFeatures = new ArrayList<>();

        for (Integer featureId:
             featuresId) {
            productFeatures.add(featureRepository.findById(featureId));
        }

        return productFeatures;
    }

//para agregar varias Features modificar atributo a List
    //recorrer la lista de Features para agregarlas a la tabla intermedia ProductFeatures

    public void agregarFeaturesAProduct(Integer productId, List<Integer> featuresId) throws ResourceNotFoundException {
        if(productRepository.findById(productId) == null){
            throw new ResourceNotFoundException("No existe el product con el id: " + productId);
        }

        ProductFeatureKey productFeatureKey = new ProductFeatureKey();
        productFeatureKey.setProductId(productId);

        ProductFeature productFeature = new ProductFeature();

        Optional<Product> p = productRepository.findById(productId);
        productFeature.setProduct(p.get());

        for (Integer featureId:
             featuresId) {
            productFeatureKey.setFeatureId(featureId);
            productFeature.setId(productFeatureKey);

            Optional<Feature> f = featureRepository.findById(featureId);
            productFeature.setFeature(f.get());

            productFeatureRepository.save(productFeature);
        }

    }


}
