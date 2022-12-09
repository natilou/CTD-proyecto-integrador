package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.Image;
import com.example.PI_grupo_10.model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PolicyRepository extends JpaRepository <Policy, Integer> {
    //@Query(value="SELECT p.id, p.description, p.type_id, p.product_id FROM policies p WHERE product_id =?1", nativeQuery = true)
    List<Policy> findByProductId (int productId);
}
