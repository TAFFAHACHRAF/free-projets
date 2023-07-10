package com.jovanovic.stefan.products_management.activities.product;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.jovanovic.stefan.products_management.R;
import com.jovanovic.stefan.products_management.db.MyDatabaseHelper;
import com.jovanovic.stefan.products_management.entities.Product;

public class ProductAddActivity extends AppCompatActivity {

    EditText product_name_input, product_quantity_input, product_status_input;
    Button add_button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_product);

        product_name_input = findViewById(R.id.product_name_input);
        product_quantity_input = findViewById(R.id.product_quantity_input);
        product_status_input = findViewById(R.id.product_status_input);
        add_button = findViewById(R.id.add_button);
        add_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                MyDatabaseHelper myDB = new MyDatabaseHelper(ProductAddActivity.this);
                Product p=new Product();
                p.setName(product_name_input.getText().toString().trim());
                p.setQuantity(Integer.valueOf(product_quantity_input.getText().toString()));
                p.setStatus(product_status_input.getText().toString().trim());

                myDB.addProduct(
                        p
                );
            }
        });
    }
}
