package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository <Product, Integer> {
    //@Query //averiguar query para la base de datos ver si mando a comparar el id o el objeto

    //@Query("SELECT p FROM Product p WHERE p.city=?1")
    List<Product> findByCityId (int cityId);

    //@Query("SELECT p FROM Product p WHERE p.category=?1")
    List<Product> findByCategoryId (int categoryId);
}
