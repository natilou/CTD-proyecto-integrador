package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Feature;
import com.example.PI_grupo_10.repository.FeatureRepository;
import com.example.PI_grupo_10.repository.ProductFeatureRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class FeatureService {

    private FeatureRepository featureRepository;

    public Feature buscar(Integer id) throws ResourceNotFoundException {
        Optional<Feature> feature = featureRepository.findById(id);
        if (!feature.isPresent()) {
            log.error("NO EXISTE LA FEATURE CON EL ID: "+id);
            throw new ResourceNotFoundException("No existe la feature con el id: "+ id);
        }
        log.info("Se encontró la feature con el id: " + id);
        return feature.get();
    }

    public List<Feature> listarTodos() {
        log.info("Se buscan todas las features");
        return featureRepository.findAll();
    }

}
