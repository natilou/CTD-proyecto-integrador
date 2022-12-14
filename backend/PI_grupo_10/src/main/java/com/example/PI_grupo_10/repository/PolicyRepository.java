package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PolicyRepository extends JpaRepository <Policy, Integer> {
    List<Policy> findByProductId (int productId);
}
