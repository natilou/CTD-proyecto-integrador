package com.example.PI_grupo_10.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name= "products_features")
public class ProductFeature {
    @EmbeddedId
    private ProductFeatureKey id;

    @ManyToOne
    @MapsId("product_id")
    @JoinColumn(name="product_id")
    @JsonBackReference
    @JsonIgnore
    private Product product;

    @ManyToOne
    @MapsId("feature_id")
    @JoinColumn(name="feature_id")
    @JsonBackReference
    @JsonIgnore
    private Feature feature;
}
