package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Booking;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.repository.BookingRepository;
import com.example.PI_grupo_10.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class BookingService {

    private BookingRepository _bookingRepository;
    private UserRepository _userRepository;

    public BookingDto guardar(BookingDto bookingDto){
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

    public List<Booking> findByUserId(int userId) throws ResourceNotFoundException {
        if (!_userRepository.existsById(userId)){
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }
        return _bookingRepository.findByUser(_userRepository.findById(userId));
    }

}
