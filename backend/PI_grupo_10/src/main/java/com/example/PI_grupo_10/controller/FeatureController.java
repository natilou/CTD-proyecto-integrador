package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Category;
import com.example.PI_grupo_10.model.Feature;
import com.example.PI_grupo_10.model.Product;
import com.example.PI_grupo_10.model.ProductFeature;
import com.example.PI_grupo_10.repository.FeatureRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import com.example.PI_grupo_10.service.FeatureService;
import com.example.PI_grupo_10.service.ProductFeatureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/features")
public class FeatureController {

    @Autowired
    private FeatureService featureService;
    
    @Autowired
    private ProductFeatureService productFeatureService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private FeatureRepository featureRepository;

    @GetMapping
    public ResponseEntity<List<Feature>> listarTodos(){
        return ResponseEntity.ok(featureService.listarTodos());
    }



    /*
    @PostMapping("/products/{featureId}/features")
    public ResponseEntity<Feature> addTag(@PathVariable(value = "tutorialId") int productId, @RequestBody Feature featureRequest) {
        Feature feature = productRepository.findById(productId).map(product -> {
            int featureId = featureRequest.getId();

            // tag is existed
            if (featureId != 0L) {
                Feature _feature = featureRepository.findById(featureId)
                        .orElseThrow(() -> new ResourceNotFoundException("Not found Tag with id = " + featureId));
                product.addFeature(_feature);
                productRepository.save(product);
                return _feature;
            }

            // add and create new Tag
            product.addFeature(featureRequest);
            return featureRepository.save(featureRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found Tutorial with id = " + productId));

        return new ResponseEntity<>(feature, HttpStatus.CREATED);
    }

     */
}
