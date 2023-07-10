package com.jovanovic.stefan.products_management.activities.dashbord;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

import com.jovanovic.stefan.products_management.R;

public class AffilieurActivity extends AppCompatActivity {

    private Button offresButton, commandesButton, facturesButton, profileButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_affilieur);

        offresButton = findViewById(R.id.offres);
        commandesButton = findViewById(R.id.commandes_button);
        facturesButton = findViewById(R.id.factures_button);
        profileButton = findViewById(R.id.profile_button);


        offresButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //startActivity(new Intent(AffilieurActivity.this, MainActivity.class));
            }
        });

        commandesButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //startActivity(new Intent(AccueilActivity.this, CommandesActivity.class));
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
