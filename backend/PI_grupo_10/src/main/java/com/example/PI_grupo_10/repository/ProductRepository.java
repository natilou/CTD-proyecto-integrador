package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.Category;
import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository <Product, Integer> {
    List<Product> findByCityId (int cityId);
    List<Product> findByCategoryId (int categoryId);
}
