package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.exceptions.BadRequestException;
import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> registrarUsuario(@RequestBody User user) throws BadRequestException {
        return new ResponseEntity<>(userService.agregarUsuario(user), HttpStatus.CREATED);
    }


}
