package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.Booking;
import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.model.dto.BookingDto;
import com.example.PI_grupo_10.repository.BookingRepository;
import com.example.PI_grupo_10.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class BookingService {

    @Autowired
    private UserService userService;

    private BookingRepository _bookingRepository;
    private UserRepository _userRepository;

    private static final Logger logger = Logger.getLogger(CategoryService.class);

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
/*NO VA MAS///////////////////////////
    public User findUserByEmail(String email) throws ResourceNotFoundException {
        return userService.getUserByEmail(email);
    }
*/
    public List<BookingDto> findByUserId(int userId) throws ResourceNotFoundException {
        if (!_userRepository.existsById(userId)){
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }

        var bookings = this._bookingRepository.findByUser(_userRepository.findById(userId));

        if (bookings.isEmpty())
            return null;

        List<BookingDto> bookingDtos = new ArrayList<>();

        for (Booking booking:
             bookings) {
            bookingDtos.add(new BookingDto(booking));
        }

        return bookingDtos;
    }

    public void eliminarReserva(Integer id) throws ResourceNotFoundException {
        if (this.obtenerReserva(id)==null){
            logger.error("Se quiere eliminar una reserva con un id inexistente en la base de datos.");
            throw new ResourceNotFoundException("No existe una reserva con el ID: " + id);
        } else{
            _bookingRepository.deleteById(id);
            logger.info("Se elimino la reserva con el id: " + id);
        }
    }

}
