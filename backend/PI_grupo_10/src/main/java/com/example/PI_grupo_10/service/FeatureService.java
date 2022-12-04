package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Feature;
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
public class FeatureService {
    private FeatureRepository featureRepository;
    private ProductRepository productRepository;
    private ProductFeatureRepository productFeatureRepository;
// LO COMENTÉ HASTA ENCONTRAR LA SOLUCION*****************************************************
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

    public Feature buscar(Integer id) {
        Feature feature = null;
        Optional<Feature> optionalFeature = featureRepository.findById(id);
        if (optionalFeature.isPresent()) {
            feature = optionalFeature.get();
            log.info("Se encontró la feature con el id: " + id);
        }
        return feature;
    }

    public List<Feature> listarTodos() {
        log.info("Se buscan todas las features");
        return featureRepository.findAll();
    }

}
