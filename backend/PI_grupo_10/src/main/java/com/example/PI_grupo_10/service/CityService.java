package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.model.Category;
import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.repository.CityRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class CityService {

    private CityRepository cityRepository;

    private static final Logger logger = Logger.getLogger(CityService.class);

    public List<City> listarTodas(){
        logger.info("Se buscan todas las ciudades");
        return cityRepository.findAll();
    }

    public City buscar(Integer id){
        City city = null;
        Optional<City> optionalCity= cityRepository.findById(id);
        if (optionalCity.isPresent()){
            city = optionalCity.get();
            logger.info("Se encontró la city con el id: " + id);
        }
        return city;
    }
}
