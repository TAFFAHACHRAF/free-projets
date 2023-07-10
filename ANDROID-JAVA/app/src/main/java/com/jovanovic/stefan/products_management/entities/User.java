package com.jovanovic.stefan.products_management.entities;

public class User {
    private int id;
    private String nom;
    private String email;
    private String tel;
    private String password;
    private String role;

    public User() {
    }

    public User(String nom, String email, String tel, String password, String role) {
        this.nom = nom;
        this.email = email;
        this.tel = tel;
        this.password = password;
        this.role = role;
    }

    // Getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
