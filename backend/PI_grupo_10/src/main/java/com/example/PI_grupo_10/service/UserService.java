package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private static final Logger logger = Logger.getLogger(UserService.class);

    public User getUserByNameAndPassword(String email, String password) {
        User user = this.userRepository.findByEmailAndPassword(email, password);
        if (user == null) {
            return null;
        }
        return user;
    }

    public User agregarUsuario(User user) {
        logger.info("Se agrego el usuario: " + user);
        return userRepository.save(user);
    }
}