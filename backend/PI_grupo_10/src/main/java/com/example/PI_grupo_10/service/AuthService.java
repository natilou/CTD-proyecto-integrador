package com.example.PI_grupo_10.service;

import com.example.PI_grupo_10.config.JwtGenerator;
import com.example.PI_grupo_10.exceptions.ResourceNotFoundException;
import com.example.PI_grupo_10.model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Service
public class AuthService {

    @Autowired
    private UserService userService;

    public User findUserByToken(HttpServletRequest request) throws ResourceNotFoundException {
        var rawToken = request.getHeader("Authorization");
        var jwtToken = rawToken.split(" ")[1];
        var jwtGenerator = new JwtGenerator();
        var email = jwtGenerator.getUserLogged(jwtToken);

        return userService.getUserByEmail(email);
    }
}
