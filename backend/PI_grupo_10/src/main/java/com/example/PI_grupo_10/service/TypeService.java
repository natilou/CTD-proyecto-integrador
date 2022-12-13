package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
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

    public Type buscar(Integer id) throws ResourceNotFoundException {
            Optional<Type> type = typeRepository.findById(id);
            if (!type.isPresent()){
                throw new ResourceNotFoundException("No existe el type con el id: " + id);
            }
            log.info("Se encontró el type con el id: " + id);
            return type.get();
    }
}
