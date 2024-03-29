package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.*;
import com.example.PI_grupo_10.repository.PolicyRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import com.example.PI_grupo_10.repository.TypeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;

@Slf4j
@AllArgsConstructor
@Service
public class PolicyService {

    private PolicyRepository policyRepository;
    private ProductRepository productRepository;

    public Policy agregar(Policy policy){
        log.info("Se crea la policy: " + policy);
        return policyRepository.save(policy);
    }

    public List<Policy> buscarPorProductId(Integer productId) throws ResourceNotFoundException {
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Not found product with id = " + productId);
        } else {
            log.info("Se buscan todas las policies con el productId: " + productId);
            return policyRepository.findByProductId(productId);
        }
    }

    public void eliminar(Policy policy) {
        policyRepository.delete(policy);
    }
}
