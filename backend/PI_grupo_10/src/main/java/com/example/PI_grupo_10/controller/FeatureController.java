package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.model.Feature;
import com.example.PI_grupo_10.repository.FeatureRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import com.example.PI_grupo_10.service.FeatureService;
import com.example.PI_grupo_10.service.ProductFeatureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping
    public ResponseEntity<List<Feature>> listarTodos(){
        return ResponseEntity.ok(featureService.listarTodos());
    }

}
