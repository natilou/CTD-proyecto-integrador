package com.example.PI_grupo_10.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Categoria {

    @Id
    private int id;
    private String title;
    private String description;
    private String url_image;
    private int amount;

    //Constructor vacío
    public Categoria(){}

    //Constructor sin id
    public Categoria(String title, String description, String url_image, Integer amount) {
        this.title = title;
        this.description = description;
        this.url_image = url_image;
        this.amount = amount;
    }

    //Constructor completo
    public Categoria(Integer id, String title, String description, String url_image, Integer amount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url_image = url_image;
        this.amount = amount;
    }

    //Getters & Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl_image() {
        return url_image;
    }

    public void setUrl_image(String url_image) {
        this.url_image = url_image;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    //Agrego To String para visualizar informacion

    @Override
    public String toString() {
        return "Categoria{" + "id=" + id +
                ", titulo=" + title +
                ", descripcion='" + description + '\'' +
                ", url_imagen='" + url_image + '\''+
                ", amount='" + amount + '\''+
                '}';
    }
}
