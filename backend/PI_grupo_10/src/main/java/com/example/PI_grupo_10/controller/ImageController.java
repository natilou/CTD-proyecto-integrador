package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.BadRequestException;
import com.example.PI_grupo_10.model.S3Util;
import com.example.PI_grupo_10.service.ImageService;
import com.fasterxml.uuid.Generators;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/upload")
    public List<String> subirImagenesABucketS3(@RequestParam("files") List<MultipartFile> multiparts) throws IOException, BadRequestException {
        if(!multiparts.isEmpty())
            return imageService.subirImagenesABucketS3(multiparts);
        else
            throw new BadRequestException("No se recibió ningún archivo");
    }
}
