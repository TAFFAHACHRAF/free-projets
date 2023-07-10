package com.jovanovic.stefan.products_management.activities.dashbord;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.jovanovic.stefan.products_management.R;
import com.jovanovic.stefan.products_management.activities.commande.CommandeMainActivity;
import com.jovanovic.stefan.products_management.activities.product.ProductMainActivity;

public class AdminActivity extends AppCompatActivity {

    private Button usersButton, productsButton, commandesButton, facturesButton, profileButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin);

        usersButton = findViewById(R.id.users_button);
        productsButton = findViewById(R.id.products_button);
        commandesButton = findViewById(R.id.commandes_button);
        facturesButton = findViewById(R.id.factures_button);
        profileButton = findViewById(R.id.profile_button);

        usersButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //startActivity(new Intent(AccueilActivity.this, UsersActivity.class));
            }
        });

        productsButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AdminActivity.this, ProductMainActivity.class));
            }
        });

        commandesButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AdminActivity.this, CommandeMainActivity.class));
            }
        });

        facturesButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //startActivity(new Intent(AccueilActivity.this, FacturesActivity.class));
            }
        });

        profileButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //startActivity(new Intent(AccueilActivity.this, ProfileActivity.class));
            }
        });
    }
}
