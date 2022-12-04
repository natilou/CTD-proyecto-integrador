package com.example.PI_grupo_10.model.dto;

import com.example.PI_grupo_10.model.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor//este quizás tmb
@AllArgsConstructor// este creo que está de más por la forma en que se construyen los DTOs
@Data
public class ProductDto {
    public int id;
    public String title;
    public Category category;
    public String address;
    public City city;
    public String description;
    public String coverImageUrl;

    public ProductDto(Product product) {
        this.id = product.getId();
        this.title = product.getTitle();
        this.category = product.getCategory();
        this.address = product.getAddress();
        this.city = product.getCity();
        this.description = product.getDescription();
        this.coverImageUrl = product.getCoverImageUrl();
    }
/*
    public ProductDto(Product product) {
        this.id = product.getId();
        this.title = product.getTitle();
    }

 */
}
