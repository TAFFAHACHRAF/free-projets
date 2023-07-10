package com.foryou.soumaya.inscription;


public record InscriptionRequest(
         String firstName,
         String lastName,
         String email,
         String password,
         String birthday,
         String role) { }
