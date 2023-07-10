package com.foryou.soumaya.inscription;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
public class LoginRequest {
    private String username;
    private String password;
    private String email;

    // Constructors, getters, and setters
}
