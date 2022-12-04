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
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class ProductFeatureService {

    private ProductFeatureRepository productFeatureRepository;
    private FeatureRepository featureRepository;
    private ProductRepository productRepository;

    public List findByProductId(Integer productId) throws ResourceNotFoundException {
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }

        List featuresId = productFeatureRepository.findByProductId(productId);

        List<Optional<Feature>> productFeatures = new ArrayList<>();

        for (int i = 0; i < featuresId.size() ; i++) {
            productFeatures.add(featureRepository.findById((Integer) featuresId.get(i)));
        }

        return productFeatures;
    }

//para agregar varias Features modificar atributo a List
    //recorrer la lista de Features para agregarlas a la tabla intermedia ProductFeatures

    public void agregarFeaturesAProduct(Integer productId, List<String> featuresId){
        ProductFeatureKey productFeatureKey = new ProductFeatureKey();
        productFeatureKey.setProductId(productId);

        ProductFeature productFeature = new ProductFeature();
        Optional<Product> p = productRepository.findById(productId);
        productFeature.setProduct(p.get());

        for (int i = 0; i < featuresId.size(); i++) {

            productFeatureKey.setFeatureId(Integer.parseInt(featuresId.get(i)));

            Optional<Feature> f = featureRepository.findById(Integer.parseInt(featuresId.get(i)));

            productFeature.setId(productFeatureKey);

            productFeature.setFeature(f.get());

            productFeatureRepository.save(productFeature);
        }

    }


}
