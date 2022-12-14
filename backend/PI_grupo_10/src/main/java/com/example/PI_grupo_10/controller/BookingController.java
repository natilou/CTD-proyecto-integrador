package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.service.AuthService;
import com.example.PI_grupo_10.service.BookingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController
{
    @Autowired
    private BookingService bookingService;

    @Autowired
    private AuthService authService;

    @PostMapping
    public ResponseEntity<BookingDto> crearReserva(@RequestBody BookingDto booking){
        var bookingGuardado = bookingService.guardarReserva(booking);
        if (bookingGuardado == null) {
            return (ResponseEntity<BookingDto>) ResponseEntity.badRequest();
        }

        return ResponseEntity.ok(bookingGuardado);
    }

    //////////////OBTENER RESERVAS CORRESPONDIENTES AL USUARIO LOGUEADO///////////////////////
    @GetMapping
    public ResponseEntity obtenerReservasDelUserLogueado(HttpServletRequest request) throws ResourceNotFoundException {
        User user = authService.findUserByToken(request);

        var booking = this.bookingService.findByUserId(user.getId());

        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No hay reservas del usuario: " + user.getEmail());
        }
        return ResponseEntity.ok(booking);
    }

    /////////////ENDPOINT DE PRUEBA////////////////////////////////////////
    @GetMapping("/users/{id}")
    public ResponseEntity findByUserId(@PathVariable int id) throws ResourceNotFoundException {
        var booking = this.bookingService.findByUserId(id);

        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reserva no encontrada");
        }
        return ResponseEntity.ok(booking);
    }

    //////////////ELIMINAR RESERVA CORRESPONDIENTE AL USUARIO LOGUEADO POR ID DE RESERVA///////////////////////
    @DeleteMapping("/{bookingId}")
    public String eliminarReserva(HttpServletRequest request, @PathVariable int bookingId) throws ResourceNotFoundException {
        return bookingService.eliminarReserva(request, bookingId);
    }

}
