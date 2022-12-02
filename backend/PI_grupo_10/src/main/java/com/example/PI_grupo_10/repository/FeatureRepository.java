package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeatureRepository extends JpaRepository <Feature, Integer> {
    List<Feature> findByProductsId(Integer productId);

    //@Query(value="SELECT * FROM products ORDER BY rand() LIMIT 8", nativeQuery=true)
/*
    @Query(value="INSERT INTO products_features" +
            "VALUES (?1, ?2);", nativeQuery=true)
    void addProductFeature(Integer productId, Integer featureId);

*/
}

