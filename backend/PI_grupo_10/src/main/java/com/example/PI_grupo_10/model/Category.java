package com.example.PI_grupo_10.model;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name= "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    private int id;
    private String title;
    @NotEmpty
    private String description;
    private String urlImage;

    private transient int amount;//actualiza con el service el length de la lista cuando hace listartodos

    //Constructor sin id
    public Category(String title, String description, String urlImage, Integer amount) {
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.amount = amount;
    }
}
