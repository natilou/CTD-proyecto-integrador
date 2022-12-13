package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Booking;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.repository.BookingRepository;
import com.example.PI_grupo_10.repository.ProductRepository;
import com.example.PI_grupo_10.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class BookingService {

    private BookingRepository _bookingRepository;
    private UserRepository _userRepository;
    private ProductRepository _productRepository;

    public BookingDto guardarReserva(BookingDto bookingDto){
        Booking bookingEntidad = new Booking(bookingDto);
        Booking bookingGuardada = this._bookingRepository.save(bookingEntidad);

        if (bookingGuardada.getId() > 0) {
            bookingDto.id = bookingGuardada.getId();
            return bookingDto;
        }

        return null;
    }

    public BookingDto obtenerReserva(int id) {
        var booking = this._bookingRepository.findById(id);
        if (!booking.isPresent())
            return null;
        return new BookingDto(booking.get());
    }

    public List<LocalDate> findByProductId(int productId) throws ResourceNotFoundException {
        if (!_productRepository.existsById(productId)){
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }

        var bookings = this._bookingRepository.findByProductId(productId);

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
        if (!_userRepository.existsById(userId)){
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }

        var bookings = this._bookingRepository.findByUser(_userRepository.findById(userId));

        if (bookings.isEmpty())
            throw new ResourceNotFoundException("No hay reservas para el user id: " + userId);

        List<BookingDto> bookingDtos = new ArrayList<>();

        for (Booking booking:
             bookings) {
            bookingDtos.add(new BookingDto(booking));
        }

        return bookingDtos;
    }

    public void eliminarReserva(Integer id) throws ResourceNotFoundException {
        if (this.obtenerReserva(id)==null){
            log.error("Se quiere eliminar una reserva con un id inexistente en la base de datos.");
            throw new ResourceNotFoundException("No existe una reserva con el ID: " + id);
        } else{
            _bookingRepository.deleteById(id);
            log.info("Se elimino la reserva con el id: " + id);
        }
    }

}
