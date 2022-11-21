package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController
{
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingDto> crear(@RequestBody BookingDto booking){
        var bookingGuardado = bookingService.guardar(booking);
        if (bookingGuardado == null) {
            return (ResponseEntity<BookingDto>) ResponseEntity.badRequest();
        }

        return ResponseEntity.ok(bookingGuardado);
    }

/*    GET BookingDto ObtenerReserva @RequestParam INT bookingId
        Llamar al servicio
            Valida si existe la reserva
                Llamar a repositorio
                    Buscar en BD si esta la reserva
                Retornar reserva
        Retornar reserva      */

    @GetMapping("/{id}")
    public ResponseEntity ObtenerReserva(@PathVariable int id){
        var booking = this.bookingService.obtenerReserva(id);

        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reserva no encontrada");
        }

        return ResponseEntity.ok(booking);
    }
}
