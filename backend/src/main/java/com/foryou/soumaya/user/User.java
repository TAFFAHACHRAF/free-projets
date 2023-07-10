package com.foryou.soumaya.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.util.UUID;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @NaturalId(mutable = true)
    private String email;
    private String password;
    private String role;
    private String birthday;
    private boolean isEnabled = false;
    @Column(name = "access_token")
    private String accessToken;
    private String generateAccessToken() {
        // Generate and return an access token using a suitable mechanism
        // For example, you can use UUID.randomUUID().toString() to generate a random token
        return UUID.randomUUID().toString();
    }
    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
