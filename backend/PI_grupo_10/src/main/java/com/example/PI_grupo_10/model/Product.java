package com.example.PI_grupo_10.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name= "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private int id;
    private String title;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)//AVERIGUAR: no va CASCADE
    //@JsonIgnore
    private Category category; //es int o Category?

    private String address;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "city_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)//AVERIGUAR
    //@JsonIgnore
    private City city;// es int o City?

    private String description;


    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "products_features",
            joinColumns = { @JoinColumn(name = "product_id") },
            inverseJoinColumns = { @JoinColumn(name = "feature_id") })
    @JsonIgnore // si lo comento sólo funca cuando no hay features asociadas
    //@JsonBackReference //"funciona" pero no devuelve nada
    //@JsonManagedReference
    private Set<Feature> features = new HashSet<>();

    public Product(String title, Category category, String address, City city, String description) {
        this.title = title;
        this.category = category;
        this.address = address;
        this.city = city;
        this.description = description;
    }

}
