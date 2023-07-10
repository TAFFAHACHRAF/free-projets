package com.jovanovic.stefan.products_management.activities;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.jovanovic.stefan.products_management.R;
import com.jovanovic.stefan.products_management.activities.dashbord.AdminActivity;
import com.jovanovic.stefan.products_management.activities.dashbord.AffilieurActivity;
import com.jovanovic.stefan.products_management.db.MyDatabaseHelper;

public class LoginActivity extends AppCompatActivity {

    private EditText emailEditText, passwordEditText;
    private Button loginButton;
    private MyDatabaseHelper databaseHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        emailEditText = findViewById(R.id.editTextEmail);
        passwordEditText = findViewById(R.id.editTextPassword);
        loginButton = findViewById(R.id.buttonLogin);
        databaseHelper = new MyDatabaseHelper(this);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email = emailEditText.getText().toString().trim();
                String password = passwordEditText.getText().toString().trim();
                Cursor cursor = databaseHelper.getUserByEmailAndPassword(email, password);

                if (cursor != null && cursor.moveToFirst()) {
                    // User found, perform login operation
                    String role = cursor.getString(cursor.getColumnIndex("role"));
                    if(role.equals("admin")){
                        Toast.makeText(LoginActivity.this, "Login successful! User role: " + role, Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(LoginActivity.this, AdminActivity.class));
                    }
                    else{
                        Toast.makeText(LoginActivity.this, "Login successful! User role: " + role, Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(LoginActivity.this, AffilieurActivity.class));
                    }
                } else {
                    // User not found or invalid credentials
                    Toast.makeText(LoginActivity.this, "Invalid email or password!", Toast.LENGTH_SHORT).show();
                }
                if (cursor != null) {
                    cursor.close();
                }
            }
        });
    }
}
