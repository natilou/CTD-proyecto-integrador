package com.example.PI_grupo_10.model;

import lombok.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
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
}