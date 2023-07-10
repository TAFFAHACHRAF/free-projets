package com.jovanovic.stefan.products_management.entities;

public class Facture {
    private int id;
    private String status;
    private String dateCreation;
    private String dateUpdate;
    private double montant;

    public Facture(int id, String status, String dateCreation, String dateUpdate, double montant) {
        this.id = id;
        this.status = status;
        this.dateCreation = dateCreation;
        this.dateUpdate = dateUpdate;
        this.montant = montant;
    }

    public int getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public String getDateCreation() {
        return dateCreation;
    }

    public String getDateUpdate() {
        return dateUpdate;
    }

    public double getMontant() {
        return montant;
    }
}
