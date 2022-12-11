package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.service.ProductFeatureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/product_features")
public class ProductFeatureController {

    @Autowired
    private ProductFeatureService productFeatureService;

    @PostMapping
    public void agregarFeaturesAProduct(@RequestParam("productId") Integer productId, @RequestParam("featureId") List<Integer> featuresId) throws ResourceNotFoundException {
        productFeatureService.agregarFeaturesAProduct(productId, featuresId);
    }

}
