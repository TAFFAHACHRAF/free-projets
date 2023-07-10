package com.jovanovic.stefan.products_management.entities;

public class Categorie {
    private int id;
    private String categoryName;

    public Categorie(int id, String categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }

    public int getId() {
        return id;
    }

    public String getCategoryName() {
        return categoryName;
    }
}
