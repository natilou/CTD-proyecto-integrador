package com.example.PI_grupo_10.model.dto;

import com.example.PI_grupo_10.model.Booking;
import com.example.PI_grupo_10.model.Product;
import com.example.PI_grupo_10.model.User;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.Optional;

public class BookingDto {
    public int id;
    public LocalDateTime initialHour;
    public LocalDate initialDate;
    public LocalDate endDate;
    public Product product;
    public User user;

    public BookingDto(Booking booking) {
        this.id = booking.getId();
        this.initialHour = booking.getInitialHour();
        this.initialDate = booking.getInitialDate();
        this.endDate = booking.getEndDate();
        this.product = booking.getProduct();
        this.user = booking.getUser();
    }
}
