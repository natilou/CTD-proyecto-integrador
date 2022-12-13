package com.example.PI_grupo_10.config;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {

    public static String EncodePassword(String rawPassword){
        BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
        return passwordEncoder.encode(rawPassword);
    }

    public static boolean MatchPassword(String rawPassword, String password){
        BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
        return passwordEncoder.matches(rawPassword, password);
    }
}
