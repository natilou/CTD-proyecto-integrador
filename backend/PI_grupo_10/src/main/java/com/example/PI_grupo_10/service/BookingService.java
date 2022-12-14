package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Booking;
import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.repository.BookingRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import com.example.PI_grupo_10.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class BookingService {

    @Autowired
    private AuthService authService;

    private BookingRepository bookingRepository;
    private UserRepository userRepository;
    private ProductRepository productRepository;

    public BookingDto guardarReserva(BookingDto bookingDto){
        Booking bookingEntidad = new Booking(bookingDto);
        Booking bookingGuardada = this.bookingRepository.save(bookingEntidad);

        if (bookingGuardada.getId() > 0) {
            bookingDto.id = bookingGuardada.getId();
            return bookingDto;
        }

        return null;
    }

    public BookingDto obtenerReserva(int id) {
        var booking = this.bookingRepository.findById(id);
        if (!booking.isPresent())
            return null;
        return new BookingDto(booking.get());
    }

    public List<Booking> findByProductId(int productId) throws ResourceNotFoundException {
        if (!productRepository.existsById(productId)){
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }

        var bookings = this.bookingRepository.findByProductId(productId);

        return bookings;
    }

    public List<LocalDate> findDatesByProductId(int productId) throws ResourceNotFoundException {
        if (!productRepository.existsById(productId)){
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }

        var bookings = this.bookingRepository.findByProductId(productId);

        if (bookings.isEmpty())
            throw new ResourceNotFoundException("No hay reservas para el product id: " + productId);

        List<LocalDate> bookedDates = new ArrayList<>();
        for (Booking booking:
                bookings) {
            bookedDates.add(booking.getInitialDate());
            bookedDates.add(booking.getEndDate());
        }

        return bookedDates;
    }


    public List<BookingDto> findByUserId(int userId) throws ResourceNotFoundException {
        if (!userRepository.existsById(userId)){
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }

        var bookings = this.bookingRepository.findByUser(userRepository.findById(userId));

        if (bookings.isEmpty())
            throw new ResourceNotFoundException("No hay reservas para el user id: " + userId);

        List<BookingDto> bookingDtos = new ArrayList<>();

        for (Booking booking:
             bookings) {
            bookingDtos.add(new BookingDto(booking));
        }

        return bookingDtos;
    }

    public String eliminarReserva(HttpServletRequest request, Integer bookingId) throws ResourceNotFoundException {
        User user = authService.findUserByToken(request);

        Booking booking = bookingRepository.findById(bookingId).get();

        if(user.equals(booking.getUser())) {
            if (this.obtenerReserva(bookingId) == null) {
                log.error("Se quiere eliminar una reserva con un id inexistente en la base de datos.");
                throw new ResourceNotFoundException("No existe una reserva con el ID: " + bookingId);
            } else {
                bookingRepository.deleteById(bookingId);
                log.info("Se elimino la reserva con el id: " + bookingId);
                return "Se eliminó la reserva con el id: " + bookingId;
            }
        }else{
            return "La reserva con id " + bookingId + " no corresponde al usuario logueado";
        }
    }

}
