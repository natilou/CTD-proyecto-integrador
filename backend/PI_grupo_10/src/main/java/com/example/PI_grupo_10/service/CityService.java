package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.model.City;
import com.example.PI_grupo_10.repository.CityRepository;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CityService {

    private CityRepository cityRepository;

    private static final Logger logger = Logger.getLogger(CityService.class);

    //Inyectar la dependencia
    public CityService(CityRepository cityRepository){this.cityRepository=cityRepository;}

    public List<City> listarTodas(){
        logger.info("Se buscan todas las ciudades");
        return cityRepository.findAll();
    }
}
