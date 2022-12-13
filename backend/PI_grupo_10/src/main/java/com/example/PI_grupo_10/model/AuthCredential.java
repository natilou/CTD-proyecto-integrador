package com.example.PI_grupo_10.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AuthCredential {
    public String email;
    private String password;
}
