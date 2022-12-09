package com.example.PI_grupo_10.model;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.ui.Model;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
//@Entity
public class NewProduct {
    private String title;

    private int categoryId;

    private String address;

    private int cityId;

    private String description;

    private String coverImageUrl;

    private List<Integer> featuresId;

    private List<NewPolicy> policies;

    private List<Image> images;

    //private List<String> imagesLinksS3;
}