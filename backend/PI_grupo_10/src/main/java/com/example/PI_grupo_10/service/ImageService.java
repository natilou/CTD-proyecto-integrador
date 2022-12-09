package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Image;
import com.example.PI_grupo_10.model.Product;
import com.example.PI_grupo_10.repository.ImageRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import java.util.List;

@Slf4j
@AllArgsConstructor
@Service
public class ImageService {

    private ProductRepository productRepository;
    private ImageRepository imageRepository;

    public List<Image> buscarPorProductId(Integer productId) throws ResourceNotFoundException {
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Not found product with id = " + productId);
        } else {
            log.info("Se buscan todas las imágenes con el productId: " + productId);
            return imageRepository.findByProductId(productId);
        }
    }

    public Image agregar(Image image){
        return imageRepository.save(image);
    }
}
