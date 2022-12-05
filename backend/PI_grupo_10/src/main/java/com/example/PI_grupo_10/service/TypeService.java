package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.model.Feature;
import com.example.PI_grupo_10.model.Type;
import com.example.PI_grupo_10.repository.TypeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class TypeService {
    private TypeRepository typeRepository;

    public Type buscar(Integer id) {
        Type type = null;
        Optional<Type> optionalType = typeRepository.findById(id);
        if (optionalType.isPresent()) {
            type = optionalType.get();
            log.info("Se encontró el type con el id: " + id);
        }
        return type;
    }
}
