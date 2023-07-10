package com.jovanovic.stefan.products_management.activities.product;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.jovanovic.stefan.products_management.R;
import com.jovanovic.stefan.products_management.db.MyDatabaseHelper;
import com.jovanovic.stefan.products_management.entities.Product;

public class ProductUpdateActivity extends AppCompatActivity {

    EditText product_name_input, product_quantity_input, product_status_input;
    Button update_button, delete_button;

    String id, productName, productQuantity, productStatus;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_product);

        product_name_input = findViewById(R.id.product_name_input2);
        product_quantity_input = findViewById(R.id.product_quantity_input2);
        product_status_input = findViewById(R.id.product_status_input2);
        update_button = findViewById(R.id.update_button);
        delete_button = findViewById(R.id.delete_button);

        // First we call this
        getAndSetIntentData();

        // Set actionbar title after getAndSetIntentData method
        ActionBar ab = getSupportActionBar();
        if (ab != null) {
            ab.setTitle(productName);
        }

        update_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // And only then we call this
                MyDatabaseHelper myDB = new MyDatabaseHelper(ProductUpdateActivity.this);
                productName = product_name_input.getText().toString().trim();
                productQuantity = product_quantity_input.getText().toString().trim();
                productStatus = product_status_input.getText().toString().trim();

                try {
                    int quantity = Integer.parseInt(productQuantity);

                    Product p = new Product();
                    p.setId(Integer.valueOf(id));
                    p.setName(productName);
                    p.setQuantity(quantity);
                    p.setStatus(productStatus);
                    myDB.updateProduct(p);
                } catch (NumberFormatException e) {
                    Log.e("UpdateActivity", "Invalid quantity: " + productQuantity);
                }
            }
        });

        delete_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                confirmDialog();
            }
        });

    }

    void getAndSetIntentData() {
        if (getIntent().hasExtra("id") && getIntent().hasExtra("name") &&
                getIntent().hasExtra("quantity") && getIntent().hasExtra("status")) {
            // Getting Data from Intent
            id = getIntent().getStringExtra("id");
            productName = getIntent().getStringExtra("name");
            productQuantity = getIntent().getStringExtra("quantity");
            productStatus = getIntent().getStringExtra("status");

            // Setting Intent Data
            product_name_input.setText(productName);
            product_quantity_input.setText(productQuantity);
            product_status_input.setText(productStatus);
            Log.d("stev", productName + " " + productQuantity + " " + productStatus);
        } else {
            Toast.makeText(this, "No data.", Toast.LENGTH_SHORT).show();
        }
    }

    void confirmDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Delete " + productName + " ?");
        builder.setMessage("Are you sure you want to delete " + productName + " ?");
        builder.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                MyDatabaseHelper myDB = new MyDatabaseHelper(ProductUpdateActivity.this);
                myDB.deleteProduct(Integer.valueOf(id));
                finish();
            }
        });
        builder.setNegativeButton("No", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {

            }
        });
        builder.create().show();
    }
}
