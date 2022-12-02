package com.example.PI_grupo_10.model.dto;

import com.example.PI_grupo_10.model.Booking;
import com.example.PI_grupo_10.model.Product;
import com.example.PI_grupo_10.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor//este quizás tmb
@AllArgsConstructor// este creo que está de más por la forma en que se construyen los DTOs
@Data
public class BookingDto {
    public int id;
    public LocalDate initialDate;
    public LocalDate endDate;
    public Product product;
    public User user;

    public BookingDto(Booking booking) {
        this.id = booking.getId();
        this.initialDate = booking.getInitialDate();
        this.endDate = booking.getEndDate();
        this.product = booking.getProduct();
        this.user = booking.getUser();
    }
}
