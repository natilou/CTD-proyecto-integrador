package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.config.JwtGenerator;
import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.service.AuthService;
import com.example.PI_grupo_10.service.BookingService;
import com.example.PI_grupo_10.service.UserService;
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
/*
    @GetMapping("/{id}")
    public ResponseEntity ObtenerReserva(HttpServletRequest request, @PathVariable int id){
        var rawToken = request.getHeader("Authorization");
        var jwtToken = rawToken.split(" ")[1];
        var jwtGenerator = new JwtGenerator();
        var email = jwtGenerator.getUserLogged(jwtToken);
        var booking = this.bookingService.obtenerReserva(id);


        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reserva no encontrada");
        }
        return ResponseEntity.ok(booking);
    }

 */
//////////////OBTENER RESERVAS CORRESPONDIENTES AL USUARIO LOGUEADO///////////////////////
    @GetMapping
    public ResponseEntity obtenerReservasDelUserLogueado(HttpServletRequest request) throws ResourceNotFoundException {
        User user = authService.findUserByToken(request);
        /*
        var rawToken = request.getHeader("Authorization");
        var jwtToken = rawToken.split(" ")[1];
        var jwtGenerator = new JwtGenerator();
        var email = jwtGenerator.getUserLogged(jwtToken);

        User user = bookingService.findUserByEmail(email);

         */

        var booking = this.bookingService.findByUserId(user.getId());

        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No hay reservas del usuario: " + user.getEmail());
        }
        return ResponseEntity.ok(booking);
    }

/////////////ENDPOINT DE PRUEBA///////////////////NO VA MAS/////////////////////
    @GetMapping("/users/{id}")
    public ResponseEntity findByUserId(@PathVariable int id) throws ResourceNotFoundException {
        var booking = this.bookingService.findByUserId(id);

        if (booking == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Reserva no encontrada");
        }
        return ResponseEntity.ok(booking);
    }

    //////////////SÓLO SI PERTENECE AL USUARIO LOGUEADO////////////////////////////////////
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarReserva(@PathVariable Integer id) throws ResourceNotFoundException {
        bookingService.eliminarReserva(id);
        return ResponseEntity.ok().body("Booking eliminada");
    }
}
