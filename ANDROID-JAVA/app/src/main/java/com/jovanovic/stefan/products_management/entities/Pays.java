package com.jovanovic.stefan.products_management.entities;

public class Pays {
    private int id;
    private String countryName;
    private byte[] countryFlag;
    private String countryCurrency;
    private String countryCommissionCurrency;

    public Pays(int id, String countryName, byte[] countryFlag, String countryCurrency, String countryCommissionCurrency) {
        this.id = id;
        this.countryName = countryName;
        this.countryFlag = countryFlag;
        this.countryCurrency = countryCurrency;
        this.countryCommissionCurrency = countryCommissionCurrency;
    }

    public int getId() {
        return id;
    }

    public String getCountryName() {
        return countryName;
    }

    public byte[] getCountryFlag() {
        return countryFlag;
    }

    public String getCountryCurrency() {
        return countryCurrency;
    }

    public String getCountryCommissionCurrency() {
        return countryCommissionCurrency;
    }
}
