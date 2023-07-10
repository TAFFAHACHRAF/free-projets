package com.jovanovic.stefan.products_management.db;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.jovanovic.stefan.products_management.entities.Product;
import com.jovanovic.stefan.products_management.entities.User;

public class MyDatabaseHelper extends SQLiteOpenHelper {


    public Context context;
    public static final String DATABASE_NAME = "ProductManagement.db";
    public static final int DATABASE_VERSION = 1;

    public static final String TABLE_PRODUCTS = "products";
    public static final String COLUMN_PRODUCT_ID = "id_product";
    public static final String COLUMN_PRODUCT_NAME = "product_name";
    public static final String COLUMN_PRODUCT_QUANTITY = "product_quantity";
    public static final String COLUMN_PRODUCT_STATUS = "product_status";
    public static final String COLUMN_PRODUCT_DESCRIPTION = "product_description";
    public static final String COLUMN_PRODUCT_PRICE = "product_price";
    public static final String COLUMN_PRODUCT_COMMISSION = "product_commission";
    public static final String COLUMN_PRODUCT_PHOTO = "product_photo";
    public static final String COLUMN_CATEGORY_ID = "id_category";
    public static final String COLUMN_CATEGORY_NAME = "category_name";
    public static final String COLUMN_COUNTRY_ID = "id_country";
    public static final String COLUMN_COUNTRY_NAME = "country_name";
    public static final String COLUMN_COUNTRY_FLAG = "country_flag";
    public static final String COLUMN_COUNTRY_CURRENCY = "country_currency";
    public static final String COLUMN_COUNTRY_COMMISSION_CURRENCY = "country_commission_currency";

    public static final String TABLE_COMMANDE = "commande";
    public static final String COLUMN_COMMANDE_ID = "id_commande";
    public static final String COLUMN_COMMANDE_DATE = "date";
    public static final String COLUMN_COMMANDE_MONTANT = "montant";
    public static final String COLUMN_COMMANDE_DATE_DECLARATION = "date_declaration";
    public static final String COLUMN_COMMANDE_DATE_UPDATE = "date_update";
    public static final String COLUMN_COMMANDE_CLIENT_NAME = "client_name";
    public static final String COLUMN_COMMANDE_CLIENT_PHONE = "client_phone";
    public static final String COLUMN_COMMANDE_CLIENT_CITY = "client_city";
    public static final String COLUMN_COMMANDE_STATUS = "status_commande";

    private static final String TABLE_FACTURE = "facture";
    private static final String COLUMN_FACTURE_ID = "id_facture";
    private static final String COLUMN_FACTURE_STATUS = "status";
    private static final String COLUMN_FACTURE_DATE_CREATION = "date_creation";
    private static final String COLUMN_FACTURE_DATE_UPDATE = "date_update";
    private static final String COLUMN_FACTURE_MONTANT = "montant";

    private static final String TABLE_USERS = "users";
    private static final String COLUMN_USER_ID = "id_user";
    private static final String COLUMN_USER_NAME = "nom";
    private static final String COLUMN_USER_EMAIL = "email";
    private static final String COLUMN_USER_PHONE = "tel";
    private static final String COLUMN_USER_PASSWORD = "password";
    private static final String COLUMN_USER_ROLE = "role";




    public MyDatabaseHelper(@Nullable Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
        this.context = context;
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String createCategoriesTableQuery = "CREATE TABLE IF NOT EXISTS categories (" +
                COLUMN_CATEGORY_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COLUMN_CATEGORY_NAME + " TEXT);";

        String createCountriesTableQuery = "CREATE TABLE IF NOT EXISTS countries (" +
                COLUMN_COUNTRY_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COLUMN_COUNTRY_NAME + " TEXT, " +
                COLUMN_COUNTRY_FLAG + " BLOB, " +
                COLUMN_COUNTRY_CURRENCY + " TEXT, " +
                COLUMN_COUNTRY_COMMISSION_CURRENCY + " TEXT);";

        String createProductsTableQuery = "CREATE TABLE IF NOT EXISTS " + TABLE_PRODUCTS + " (" +
                COLUMN_PRODUCT_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COLUMN_PRODUCT_NAME + " TEXT, " +
                COLUMN_PRODUCT_QUANTITY + " INTEGER, " +
                COLUMN_PRODUCT_STATUS + " TEXT, " +
                COLUMN_PRODUCT_DESCRIPTION + " TEXT, " +
                COLUMN_PRODUCT_PRICE + " REAL, " +
                COLUMN_PRODUCT_COMMISSION + " REAL, " +
                COLUMN_PRODUCT_PHOTO + " BLOB, " +
                COLUMN_CATEGORY_ID + " INTEGER, " +
                COLUMN_COUNTRY_ID + " INTEGER, " +
                "FOREIGN KEY(" + COLUMN_CATEGORY_ID + ") REFERENCES categories(" + COLUMN_CATEGORY_ID + "), " +
                "FOREIGN KEY(" + COLUMN_COUNTRY_ID + ") REFERENCES countries(" + COLUMN_COUNTRY_ID + "));";

        String createCommandeTableQuery = "CREATE TABLE IF NOT EXISTS " + TABLE_COMMANDE + " (" +
                COLUMN_COMMANDE_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COLUMN_COMMANDE_DATE + " TEXT, " +
                COLUMN_COMMANDE_MONTANT + " REAL, " +
                COLUMN_COMMANDE_DATE_DECLARATION + " TEXT, " +
                COLUMN_COMMANDE_DATE_UPDATE + " TEXT, " +
                COLUMN_COMMANDE_CLIENT_NAME + " TEXT, " +
                COLUMN_COMMANDE_CLIENT_PHONE + " TEXT, " +
                COLUMN_COMMANDE_CLIENT_CITY + " TEXT, " +
                COLUMN_COMMANDE_STATUS + " TEXT);";

        String createFactureTableQuery = "CREATE TABLE IF NOT EXISTS " + TABLE_FACTURE + " (" +
                COLUMN_FACTURE_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COLUMN_FACTURE_STATUS + " TEXT, " +
                COLUMN_FACTURE_DATE_CREATION + " TEXT, " +
                COLUMN_FACTURE_DATE_UPDATE + " TEXT, " +
                COLUMN_FACTURE_MONTANT + " REAL, " +
                COLUMN_COMMANDE_ID + " INTEGER, " +
                "FOREIGN KEY(" + COLUMN_COMMANDE_ID + ") REFERENCES " + TABLE_COMMANDE + "(" + COLUMN_COMMANDE_ID + "));";

        String createUsersTableQuery = "CREATE TABLE IF NOT EXISTS " + TABLE_USERS + " (" +
                COLUMN_USER_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COLUMN_USER_NAME + " TEXT, " +
                COLUMN_USER_EMAIL + " TEXT, " +
                COLUMN_USER_PHONE + " TEXT, " +
                COLUMN_USER_PASSWORD + " TEXT, " +
                COLUMN_USER_ROLE + " TEXT);";



        db.execSQL(createCategoriesTableQuery);
        db.execSQL(createCountriesTableQuery);
        db.execSQL(createProductsTableQuery);
        db.execSQL(createCommandeTableQuery);
        db.execSQL(createFactureTableQuery);
        db.execSQL(createUsersTableQuery);

        // Insert admin user
        ContentValues adminValues = new ContentValues();
        adminValues.put(COLUMN_USER_NAME, "Admin");
        adminValues.put(COLUMN_USER_EMAIL, "admin@example.com");
        adminValues.put(COLUMN_USER_PHONE, "123456789");
        adminValues.put(COLUMN_USER_PASSWORD, "admin123");
        adminValues.put(COLUMN_USER_ROLE, "admin");
        db.insert(TABLE_USERS, null, adminValues);

        // Insert affiliate user
        ContentValues affiliateValues = new ContentValues();
        affiliateValues.put(COLUMN_USER_NAME, "Affiliate");
        affiliateValues.put(COLUMN_USER_EMAIL, "affiliate@example.com");
        affiliateValues.put(COLUMN_USER_PHONE, "987654321");
        affiliateValues.put(COLUMN_USER_PASSWORD, "affiliate123");
        affiliateValues.put(COLUMN_USER_ROLE, "affilieur");
        db.insert(TABLE_USERS, null, affiliateValues);

        // Insert affiliate user
        ContentValues commandeValue = new ContentValues();
        commandeValue.put(COLUMN_COMMANDE_DATE, "05/07/2005");
        commandeValue.put(COLUMN_COMMANDE_MONTANT, "8897");
        commandeValue.put(COLUMN_COMMANDE_DATE_DECLARATION, "07/08/2005");
        commandeValue.put(COLUMN_COMMANDE_DATE_UPDATE, "07/08/2011");
        commandeValue.put(COLUMN_COMMANDE_CLIENT_NAME, "one");
        commandeValue.put(COLUMN_COMMANDE_CLIENT_PHONE, "05224477");
        commandeValue.put(COLUMN_COMMANDE_CLIENT_CITY, "casablanca");
        commandeValue.put(COLUMN_COMMANDE_CLIENT_NAME, "987");
        commandeValue.put(COLUMN_COMMANDE_STATUS, "done");
        db.insert(TABLE_COMMANDE, null, commandeValue);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int i, int i1) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_FACTURE);
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_COMMANDE);
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_PRODUCTS);
        db.execSQL("DROP TABLE IF EXISTS categories");
        db.execSQL("DROP TABLE IF EXISTS countries");



        db.execSQL("DROP TABLE IF EXISTS " + TABLE_USERS);

        onCreate(db);
    }

    public void addProduct(Product product) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();

        cv.put(COLUMN_PRODUCT_NAME, product.getName());
        cv.put(COLUMN_PRODUCT_QUANTITY, product.getQuantity());
        cv.put(COLUMN_PRODUCT_STATUS, product.getStatus());
        cv.put(COLUMN_PRODUCT_DESCRIPTION, product.getDescription());
        cv.put(COLUMN_PRODUCT_PRICE, product.getPrice());
        cv.put(COLUMN_PRODUCT_COMMISSION, product.getCommission());
        cv.put(COLUMN_PRODUCT_PHOTO, product.getPhoto());
        cv.put(COLUMN_CATEGORY_ID, product.getCategoryId());
        cv.put(COLUMN_COUNTRY_ID, product.getCountryId());

        long result = db.insert(TABLE_PRODUCTS, null, cv);
        if (result == -1) {
            Toast.makeText(context, "Failed to add product", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(context, "Product added successfully!", Toast.LENGTH_SHORT).show();
        }
    }

    public Cursor getAllProducts() {
        SQLiteDatabase db = this.getReadableDatabase();
        String query = "SELECT " +
                "p." + COLUMN_PRODUCT_ID + ", " +
                "p." + COLUMN_PRODUCT_NAME + ", " +
                "p." + COLUMN_PRODUCT_QUANTITY + ", " +
                "p." + COLUMN_PRODUCT_STATUS + ", " +
                "p." + COLUMN_PRODUCT_DESCRIPTION + ", " +
                "p." + COLUMN_PRODUCT_PRICE + ", " +
                "p." + COLUMN_PRODUCT_COMMISSION + ", " +
                "p." + COLUMN_PRODUCT_PHOTO + ", " +
                "c." + COLUMN_CATEGORY_NAME + ", " +
                "cnt." + COLUMN_COUNTRY_NAME + ", " +
                "cnt." + COLUMN_COUNTRY_FLAG + ", " +
                "cnt." + COLUMN_COUNTRY_CURRENCY + ", " +
                "cnt." + COLUMN_COUNTRY_COMMISSION_CURRENCY +
                " FROM " + TABLE_PRODUCTS + " p" +
                " INNER JOIN categories c ON p." + COLUMN_CATEGORY_ID + " = c." + COLUMN_CATEGORY_ID +
                " INNER JOIN countries cnt ON p." + COLUMN_COUNTRY_ID + " = cnt." + COLUMN_COUNTRY_ID;

        return db.rawQuery(query, null);
    }

    public void updateProduct(Product product) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();

        cv.put(COLUMN_PRODUCT_NAME, product.getName());
        cv.put(COLUMN_PRODUCT_QUANTITY, product.getQuantity());
        cv.put(COLUMN_PRODUCT_STATUS, product.getStatus());
        cv.put(COLUMN_PRODUCT_DESCRIPTION, product.getDescription());
        cv.put(COLUMN_PRODUCT_PRICE, product.getPrice());
        cv.put(COLUMN_PRODUCT_COMMISSION, product.getCommission());
        cv.put(COLUMN_PRODUCT_PHOTO, product.getPhoto());
        cv.put(COLUMN_CATEGORY_ID, product.getCategoryId());
        cv.put(COLUMN_COUNTRY_ID, product.getCountryId());

        long result = db.update(TABLE_PRODUCTS, cv, COLUMN_PRODUCT_ID + "=?", new String[]{String.valueOf(product.getId())});
        if (result == -1) {
            Toast.makeText(context, "Failed to update product", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(context, "Product updated successfully!", Toast.LENGTH_SHORT).show();
        }
    }

    public void deleteProduct(int productId) {
        SQLiteDatabase db = this.getWritableDatabase();
        long result = db.delete(TABLE_PRODUCTS, COLUMN_PRODUCT_ID + "=?", new String[]{String.valueOf(productId)});
        if (result == -1) {
            Toast.makeText(context, "Failed to delete product", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(context, "Product deleted successfully!", Toast.LENGTH_SHORT).show();
        }
    }

    public void addUser(User user) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cv = new ContentValues();

        cv.put(COLUMN_USER_NAME, user.getNom());
        cv.put(COLUMN_USER_EMAIL, user.getEmail());
        cv.put(COLUMN_USER_PHONE, user.getTel());
        cv.put(COLUMN_USER_PASSWORD, user.getPassword());
        cv.put(COLUMN_USER_ROLE, user.getRole());

        long result = db.insert(TABLE_USERS, null, cv);
        if (result == -1) {
            Toast.makeText(context, "Failed to add user", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(context, "User added successfully!", Toast.LENGTH_SHORT).show();
        }
    }

    public Cursor getAllUsers() {
        SQLiteDatabase db = this.getReadableDatabase();
        String query = "SELECT * FROM " + TABLE_USERS;
        return db.rawQuery(query, null);
    }

    public Cursor getUserByEmailAndPassword(String email, String password) {
        SQLiteDatabase db = this.getReadableDatabase();
        String query = "SELECT * FROM " + TABLE_USERS + " WHERE " + COLUMN_USER_EMAIL + "='" + email + "' AND " + COLUMN_USER_PASSWORD + "='" + password + "'";
        return db.rawQuery(query, null);
    }



    // ... additional methods for managing categories, countries, commandes, and factures ...
}
