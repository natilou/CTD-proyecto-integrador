package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.model.S3Util;
import com.fasterxml.uuid.Generators;
import lombok.extern.slf4j.Slf4j;
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

    @PostMapping("/upload")
    public List<String> subirImagenesABucketS3(@RequestParam("files") List<MultipartFile> multiparts) throws IOException {
        List<String> message = new ArrayList<>();
        List<String> filenamesUploaded = new ArrayList<>();
        List<String> imagesLinksS3 = new ArrayList<>();
        String S3Url ="https://s3-group-10-c6.s3.us-east-2.amazonaws.com/";

        for (int i = 0; i < multiparts.size(); i++) {
            String fileName = multiparts.get(i).getOriginalFilename();

            System.out.println("filename: " + fileName);

            try {
                S3Util.uploadFile(fileName, multiparts.get(i).getInputStream());

                filenamesUploaded.add(fileName);

                imagesLinksS3.add(S3Url+fileName);

                message = imagesLinksS3;

            } catch (Exception ex) {
                if(!filenamesUploaded.isEmpty()) {
                    for (int j = 0; j < filenamesUploaded.size(); i++) {

                        S3Util.deleteFile(filenamesUploaded.get(j));
                        message.add("Se borró: " + filenamesUploaded.get(j));
                    }
                }
            }
        }

        return message;
    }

    @PostMapping("/uploadb")
    public List<String> subirImagenesABucketS3b(@RequestParam("files") List<MultipartFile> multiparts) throws IOException {
        List<String> message = new ArrayList<>();
        List<String> filenamesUploaded = new ArrayList<>();
        List<String> imagesLinksS3 = new ArrayList<>();
        String S3Url ="https://s3-group-10-c6.s3.us-east-2.amazonaws.com/";

        for (int i = 0; i < multiparts.size(); i++) {

            UUID uuid = Generators.randomBasedGenerator().generate();
            String fileName = String.valueOf(uuid) + multiparts.get(i).getOriginalFilename();

            //String fileName = multiparts.get(i).getOriginalFilename();

            System.out.println("filename: " + fileName);

            try {
                S3Util.uploadFile(fileName, multiparts.get(i).getInputStream());

                filenamesUploaded.add(fileName);

                imagesLinksS3.add(S3Url+fileName);

                message = imagesLinksS3;

            } catch (Exception ex) {
                if(!filenamesUploaded.isEmpty()) {
                    for (int j = 0; j < filenamesUploaded.size(); i++) {

                        S3Util.deleteFile(filenamesUploaded.get(j));
                        message.add("Se borró: " + filenamesUploaded.get(j));
                    }
                }
            }
        }

        return message;
    }
}
