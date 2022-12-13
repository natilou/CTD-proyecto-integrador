package com.example.PI_grupo_10.model;

import java.io.IOException;
import java.io.InputStream;
import software.amazon.awssdk.awscore.exception.AwsServiceException;
import software.amazon.awssdk.core.exception.SdkClientException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.regions.Region;

public class S3Util {
    private static final String BUCKET = "s3-group-10-c6";

    //InputStream hacer el close para que no se coma la memoria
    public static void uploadFile(String fileName, InputStream inputStream)
            throws S3Exception, AwsServiceException, SdkClientException, IOException {
        Region region = Region.US_EAST_2;
        S3Client client = S3Client.builder().region(region).build();

        PutObjectRequest request = PutObjectRequest.builder()
                .bucket(BUCKET)
                .key(fileName)
                .build();

        client.putObject(request,
                RequestBody.fromInputStream(inputStream, inputStream.available()));
    }

    public static void deleteFile(String fileName)
            throws S3Exception, AwsServiceException, SdkClientException, IOException {
        Region region = Region.US_EAST_2;
        S3Client client = S3Client.builder().region(region).build();

        DeleteObjectRequest request = DeleteObjectRequest.builder()
                .bucket(BUCKET)
                .key(fileName)
                .build();

        client.deleteObject(request);
    }
}
