package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.ProductFeature;
import com.example.PI_grupo_10.model.ProductFeatureKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


public interface ProductFeatureRepository extends JpaRepository<ProductFeature, ProductFeatureKey> {
    @Query(value="SELECT feature_id FROM products_features WHERE product_id =?1", nativeQuery = true)
    List findFeaturesByProductId(Integer productId);

    List<ProductFeature> findByProductId(Integer productId);
}
