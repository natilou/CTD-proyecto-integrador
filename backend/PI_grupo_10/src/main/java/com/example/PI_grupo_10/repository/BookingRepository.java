package com.example.PI_grupo_10.repository;

import com.example.PI_grupo_10.model.Booking;
import com.example.PI_grupo_10.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;


public interface BookingRepository extends JpaRepository<Booking, Integer> {
    List<Booking> findByUser (Optional<User> user);
    List<Booking> findByProductId(int productId);
}
