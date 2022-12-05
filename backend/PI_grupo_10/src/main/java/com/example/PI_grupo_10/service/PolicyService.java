package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.model.*;
import com.example.PI_grupo_10.repository.PolicyRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import com.example.PI_grupo_10.repository.TypeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class PolicyService {

    private PolicyRepository policyRepository;
    private ProductRepository productRepository;
    private TypeRepository typeRepository;

    public Policy agregar(Policy policy){
        log.info("Se crea la policy: " + policy);
        return policyRepository.save(policy);
    }
/*
    public void agregarPoliciesAProduct(Integer productId, List<String> policies){
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

 */
}
