package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.service.BookingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController
{
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingDto> crearReserva(@RequestBody BookingDto booking){
        var bookingGuardado = bookingService.guardarReserva(booking);
        if (bookingGuardado == null) {
            return (ResponseEntity<BookingDto>) ResponseEntity.badRequest();
        }

        return ResponseEntity.ok(bookingGuardado);
    }

    @GetMapping("/{id}")
    public ResponseEntity ObtenerReserva(@PathVariable int id){
        var booking = this.bookingService.obtenerReserva(id);

        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reserva no encontrada");
        }
        return ResponseEntity.ok(booking);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity findByUserId(@PathVariable int id) throws ResourceNotFoundException {
        var booking = this.bookingService.findByUserId(id);

        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reserva no encontrada");
        }
        return ResponseEntity.ok(booking);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarReserva(@PathVariable Integer id) throws ResourceNotFoundException {
        bookingService.eliminarReserva(id);
        return ResponseEntity.ok().body("Booking eliminada");
    }
}
