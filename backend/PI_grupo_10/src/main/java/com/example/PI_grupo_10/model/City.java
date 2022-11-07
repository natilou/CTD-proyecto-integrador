package com.example.PI_grupo_10.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name= "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    private int id;
    private String name;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "country_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)//AVERIGUAR
    @JsonIgnore
    private Country country;

    public City(String name, Country country) {
        this.name = name;
        this.country = country;
    }
}
