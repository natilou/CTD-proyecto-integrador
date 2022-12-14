package com.example.PI_grupo_10.model;

import com.example.PI_grupo_10.model.dto.ProductDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name= "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private int id;

    /////////////////////USER ID del ADMIN que publicó el producto///////////////////
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;


    private String title;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Category category;

    private String address;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "city_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private City city;

    private String description;

    @JoinColumn(name = "cover_image_url", nullable = false)
    private String coverImageUrl;

    public Product(String title, Category category, String address, City city, String description, String coverImageUrl) {
        this.title = title;
        this.category = category;
        this.address = address;
        this.city = city;
        this.description = description;
        this.coverImageUrl = coverImageUrl;
    }

    public Product(ProductDto productDto) {
        this.id = productDto.id;
        this.title = productDto.title;
        this.category = productDto.category;
        this.address = productDto.address;
        this.city = productDto.city;
        this.description = productDto.description;
        this.coverImageUrl = productDto.coverImageUrl;
    }
}
