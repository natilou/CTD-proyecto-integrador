package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Category;
import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.repository.CityRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class CityService {

    private CityRepository cityRepository;

    public List<City> listarTodas(){
        log.info("Se buscan todas las ciudades");
        return cityRepository.findAll();
    }

    public City buscar(Integer id) throws ResourceNotFoundException {
        Optional<City> city= cityRepository.findById(id);
        if (!city.isPresent()) {
            log.error("NO EXISTE LA CITY CON EL ID: "+id);
            throw new ResourceNotFoundException("No existe la city con el id: "+ id);
        }
        log.info("Se encontró la city con el id: " + id);
        return city.get();
    }
}
