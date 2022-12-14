package com.example.PI_grupo_10.model;

import lombok.*;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name= "features")
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "feature_sequence")
    private int id;
    private String name;
    private String pathIcon;

    public Feature(String name, String pathIcon) {
        this.name = name;
        this.pathIcon = pathIcon;
    }
}
