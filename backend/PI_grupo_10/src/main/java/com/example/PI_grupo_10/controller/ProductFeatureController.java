package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.model.ProductFeature;
import com.example.PI_grupo_10.service.ProductFeatureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/product_features")
public class ProductFeatureController {

    @Autowired
    private ProductFeatureService productFeatureService;
/*
    @PostMapping
    public ResponseEntity<ProductFeature> agregarFeatureAProduct(@RequestParam("productId") Integer productId, @RequestParam("featureId") Integer featureId) {
        return ResponseEntity.ok(productFeatureService.agregarFeatureAProduct(productId, featureId));
    }
*/
    @PostMapping
    public void agregarFeaturesAProduct(@RequestParam("productId") Integer productId, @RequestParam("featureId") List featuresId) {
        productFeatureService.agregarFeaturesAProduct(productId, featuresId);
    }
/*
    @PostMapping
    public void agregarFeaturesAProduct(@RequestBody AlgoDto algoDto) {
        productFeatureService.agregarFeaturesAProduct(productId, featuresId);
    }

 */
}