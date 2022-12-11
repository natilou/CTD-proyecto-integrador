package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Image;
import com.example.PI_grupo_10.model.Product;
import com.example.PI_grupo_10.model.S3Util;
import com.example.PI_grupo_10.repository.ImageRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import com.fasterxml.uuid.Generators;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

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

    public String eliminarImagenesDeBucketS3(List<String> imagenesCargadas) throws IOException {
        for (String imagenABorrar:
                imagenesCargadas)
        {
            S3Util.deleteFile(imagenABorrar);
            log.info("Se borró del bucket S3: " + imagenABorrar);
        }
        return "Se eliminaron del bucket S3 las imágenes: " + imagenesCargadas;
    }

    public String eliminarImagenesDeBucketS3Bis(List<String> imagenesCargadas) throws IOException {
        for (String imagenABorrar:
                imagenesCargadas)
        {
            S3Util.deleteFile(imagenABorrar);
            log.info("Se borró del bucket S3: " + imagenABorrar);
        }
        return "Se eliminaron del bucket S3 las imágenes: " + imagenesCargadas;
    }


    public List<String> subirImagenesABucketS3(List<MultipartFile> multiparts) throws IOException {
        List<String> filenamesUploaded = new ArrayList<>();
        List<String> imagesLinksS3 = new ArrayList<>();
        String S3Url ="https://s3-group-10-c6.s3.us-east-2.amazonaws.com/";

        for (MultipartFile multipartFile:
             multiparts)
         {
             log.info("Se recibe: " + multipartFile.getOriginalFilename());

            UUID uuid = Generators.randomBasedGenerator().generate();
            String fileName = String.valueOf(uuid) + multipartFile.getOriginalFilename();

            log.info("Se cambia el nombre a: " + fileName);

            try {
                S3Util.uploadFile(fileName, multipartFile.getInputStream());

                filenamesUploaded.add(fileName);

                imagesLinksS3.add(S3Url+fileName);

                log.info("Se subió al bucket S3: " + fileName);

            } catch (Exception ex) {
                if(!filenamesUploaded.isEmpty()) {
                    this.eliminarImagenesDeBucketS3(filenamesUploaded);
                    /*
                    for (String filenameUploaded:
                         filenamesUploaded)
                    {
                        S3Util.deleteFile(filenameUploaded);
                        log.info("Se borró del bucket S3: " + filenameUploaded);
                    }

                     */
                }
                throw new IOException("Falló la subida de imágenes");
            }
        }
        return imagesLinksS3;
    }
}
