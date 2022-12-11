package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.config.PasswordEncoder;
import com.example.PI_grupo_10.exceptions.BadRequestException;
import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserByNameAndPassword(String email, String password) throws ResourceNotFoundException, BadRequestException {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new ResourceNotFoundException("No existe el usuario con email: "+ email);
        }

        if (!PasswordEncoder.MatchPassword(password, user.getPassword())) {
            throw new BadRequestException("Password incorrecto");
        }

        return user;
    }

    public User agregarUsuario(User user) throws BadRequestException {
        log.info("agregarUsuario ha sido llamado: " + user);
        if(userRepository.findByEmail(user.getEmail()) == null) {
            var passwordEncoded = PasswordEncoder.EncodePassword(user.getPassword());
            user.setPassword(passwordEncoded);
            return userRepository.save(user);
        }else{
            throw new BadRequestException("Ya existe el usuario con email: " + user.getEmail());
        }
    }
}