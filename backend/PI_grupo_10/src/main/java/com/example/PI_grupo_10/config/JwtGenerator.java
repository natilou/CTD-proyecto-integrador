package com.example.PI_grupo_10.config;

import com.example.PI_grupo_10.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JwtGenerator {

    public String generateToken(User user) {
        String secretKey = "mySecretKey";

        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList(user.getRole().name());


        String token = Jwts
                .builder()
                .setId(Integer.toString(user.getId()) + "-" + System.currentTimeMillis())
                .setSubject(user.getEmail())
                .claim("authorities",
                        grantedAuthorities.stream()
                                .map(GrantedAuthority::getAuthority)
                                .collect(Collectors.toList()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                // Setear expiration dede application.properties
                .setExpiration(new Date(System.currentTimeMillis() + 2400000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return "Bearer " + token;
    }

    public String getUserLogged(String token){
        // Obtenga la clave secreta
        String secretKey = "mySecretKey";
        // Parse el token y valide su firma
        Claims claims = Jwts.parser()
                .setSigningKey(secretKey.getBytes())
                .parseClaimsJws(token)
                .getBody();

        // Acceda a la información contenida en el token
        String subject = claims.getSubject();
        return subject;
    }

}
