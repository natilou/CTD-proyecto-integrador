package com.example.PI_grupo_10.controller;

import com.example.PI_grupo_10.config.JwtGenerator;
import com.example.PI_grupo_10.model.AuthCredential;
import com.example.PI_grupo_10.model.User;
import com.example.PI_grupo_10.model.dto.AuthDto;
import com.example.PI_grupo_10.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtGenerator jwtGenerator;

    @PostMapping
    public ResponseEntity<AuthDto> login(@RequestBody AuthCredential authCredential) {
        try {
            if(authCredential.getEmail() == null || authCredential.getPassword() == null) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email o contrasena vacios");
            }

            User userData = userService.getUserByNameAndPassword(authCredential.getEmail(), authCredential.getPassword());

            if(userData == null){
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Email o contrasena invalidos");
            }

            AuthDto auth = new AuthDto();
            auth.email = userData.getEmail();
            auth.token = (jwtGenerator.generateToken(userData));
            auth.name = userData.getName();
            auth.lastName = userData.getLastName();
            auth.role = userData.getRole();
            auth.id = userData.getId();

            return ResponseEntity.ok(auth);
        } catch (ResponseStatusException e) {
            return new ResponseEntity(e.getMessage(), e.getStatus());
        } catch (Exception e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.CONFLICT);
        }
    }
}
