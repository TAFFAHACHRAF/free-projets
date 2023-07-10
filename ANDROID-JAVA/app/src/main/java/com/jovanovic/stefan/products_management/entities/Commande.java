package com.jovanovic.stefan.products_management.entities;

public class Commande {
    private int id;
    private String date;
    private double montant;
    private String dateDeclaration;
    private String dateUpdate;
    private String clientName;
    private String clientPhone;
    private String clientCity;
    private String statusCommande;

    public Commande(int id, String date, double montant, String dateDeclaration, String dateUpdate,
                    String clientName, String clientPhone, String clientCity, String statusCommande) {
        this.id = id;
        this.date = date;
        this.montant = montant;
        this.dateDeclaration = dateDeclaration;
        this.dateUpdate = dateUpdate;
        this.clientName = clientName;
        this.clientPhone = clientPhone;
        this.clientCity = clientCity;
        this.statusCommande = statusCommande;
    }

    public Commande(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getMontant() {
        return montant;
    }

    public void setMontant(double montant) {
        this.montant = montant;
    }

    public String getDateDeclaration() {
        return dateDeclaration;
    }

    public void setDateDeclaration(String dateDeclaration) {
        this.dateDeclaration = dateDeclaration;
    }

    public String getDateUpdate() {
        return dateUpdate;
    }

    public void setDateUpdate(String dateUpdate) {
        this.dateUpdate = dateUpdate;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getClientPhone() {
        return clientPhone;
    }

    public void setClientPhone(String clientPhone) {
        this.clientPhone = clientPhone;
    }

    public String getClientCity() {
        return clientCity;
    }

    public void setClientCity(String clientCity) {
        this.clientCity = clientCity;
    }

    public String getStatusCommande() {
        return statusCommande;
    }

    public void setStatusCommande(String statusCommande) {
        this.statusCommande = statusCommande;
    }
}
