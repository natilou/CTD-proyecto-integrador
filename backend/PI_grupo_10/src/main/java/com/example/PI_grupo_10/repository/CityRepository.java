package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository <City, Integer> {

}
