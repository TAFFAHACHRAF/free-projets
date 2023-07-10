package com.jovanovic.stefan.products_management.activities.product;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.jovanovic.stefan.products_management.R;
import com.jovanovic.stefan.products_management.db.MyDatabaseHelper;
import com.jovanovic.stefan.products_management.entities.Product;

import java.util.ArrayList;

public class ProductMainActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    FloatingActionButton add_button, refresh_button;
    ImageView empty_imageview;
    TextView no_data;

    MyDatabaseHelper myDB;
    ArrayList<Product> productList;
    ProductCustomAdapter customAdapter;
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_product);

        recyclerView = findViewById(R.id.recyclerView);
        add_button = findViewById(R.id.add_button);
        refresh_button = findViewById(R.id.refresh_button);
        empty_imageview = findViewById(R.id.empty_imageview);
        no_data = findViewById(R.id.no_data);

        context = this;

        add_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(ProductMainActivity.this, ProductAddActivity.class);
                startActivity(intent);
            }
        });
        refresh_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                productList.clear();
                storeDataInList();
                customAdapter.notifyDataSetChanged();
            }
        });

        myDB = new MyDatabaseHelper(ProductMainActivity.this);
        productList = new ArrayList<>();

        storeDataInList();

        customAdapter = new ProductCustomAdapter(context, productList);
        customAdapter.setOnDeleteClickListener(new ProductCustomAdapter.OnDeleteClickListener() {
            @Override
            public void onDeleteClick(int position) {
                deleteProduct(position);
            }
        });
        recyclerView.setAdapter(customAdapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(ProductMainActivity.this));
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 1) {
            recreate();
        }
    }

    void storeDataInList() {
        SQLiteDatabase db = myDB.getReadableDatabase();
        String query = "SELECT * FROM " + MyDatabaseHelper.TABLE_PRODUCTS;
        Cursor cursor = db.rawQuery(query, null);

        if (cursor.getCount() == 0) {
            empty_imageview.setVisibility(View.VISIBLE);
            no_data.setVisibility(View.VISIBLE);
        } else {
            while (cursor.moveToNext()) {
                int id = cursor.getInt(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_PRODUCT_ID));
                String name = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_PRODUCT_NAME));
                int quantity = cursor.getInt(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_PRODUCT_QUANTITY));

                Product product = new Product();
                product.setId(id);
                product.setName(name);
                product.setQuantity(quantity);
                productList.add(product);
            }
            /*empty_imageview.setVisibility(View.GONE);*/
            no_data.setVisibility(View.GONE);
        }
        cursor.close();
        db.close();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.my_menu, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item.getItemId() == R.id.delete_all) {
            confirmDialog();
        }
        return super.onOptionsItemSelected(item);
    }

    void confirmDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Delete All?");
        builder.setMessage("Are you sure you want to delete all products?");
        builder.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                deleteAllProducts();
            }
        });
        builder.setNegativeButton("No", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                // Do nothing
            }
        });
        builder.create().show();
    }

    private void deleteProduct(int position) {
        Product product = productList.get(position);
        int productId = product.getId();

        SQLiteDatabase db = myDB.getWritableDatabase();
        db.delete(MyDatabaseHelper.TABLE_PRODUCTS, MyDatabaseHelper.COLUMN_PRODUCT_ID + "=?",
                new String[]{String.valueOf(productId)});
        db.close();

        productList.remove(position);
        customAdapter.notifyItemRemoved(position);

        if (productList.isEmpty()) {
            empty_imageview.setVisibility(View.VISIBLE);
            no_data.setVisibility(View.VISIBLE);
        }
    }

    private void deleteAllProducts() {
        SQLiteDatabase db = myDB.getWritableDatabase();
        db.delete(MyDatabaseHelper.TABLE_PRODUCTS, null, null);
        db.close();

        productList.clear();
        customAdapter.notifyDataSetChanged();

        empty_imageview.setVisibility(View.VISIBLE);
        no_data.setVisibility(View.VISIBLE);
    }
}
