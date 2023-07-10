package com.foryou.soumaya.inscription.password;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MotdepasseOublie {
    private String email;
    private String newPassword;
    private String confirmPassword;
}
