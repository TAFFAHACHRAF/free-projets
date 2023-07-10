package com.jovanovic.stefan.products_management.entities;

public class Product {
    private int id;
    private String name;
    private int quantity;
    private String status;
    private String description;
    private double price;
    private double commission;
    private byte[] photo;
    private int categoryId;
    private int countryId;

    public Product() {
        // Empty constructor
    }

    public Product(int id, String name, int quantity, String status, String description, double price,
                   double commission, byte[] photo, int categoryId, int countryId) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.status = status;
        this.description = description;
        this.price = price;
        this.commission = commission;
        this.photo = photo;
        this.categoryId = categoryId;
        this.countryId = countryId;
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getCommission() {
        return commission;
    }

    public void setCommission(double commission) {
        this.commission = commission;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getCountryId() {
        return countryId;
    }

    public void setCountryId(int countryId) {
        this.countryId = countryId;
    }
}
