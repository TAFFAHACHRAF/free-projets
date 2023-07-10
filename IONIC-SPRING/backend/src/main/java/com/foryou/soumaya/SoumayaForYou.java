package com.foryou.soumaya;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
//@CrossOrigin(origins = "http://localhost:8100")
//@CrossOrigin("*")
@RestController
public class SoumayaForYou {
    public static void main(String[] args) {
        SpringApplication.run(SoumayaForYou.class, args);
    }
}
