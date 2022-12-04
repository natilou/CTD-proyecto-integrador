package com.example.PI_grupo_10.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class ProductFeatureKey implements Serializable {

    @Column(name = "product_id")
    private int productId;

    @Column(name = "feature_id")
    private int featureId;
}