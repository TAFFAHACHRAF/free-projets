package com.jovanovic.stefan.products_management.activities.commande;

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
import com.jovanovic.stefan.products_management.entities.Commande;

import java.util.ArrayList;

public class CommandeMainActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    FloatingActionButton add_button, refresh_button;
    ImageView empty_imageview;
    TextView no_data;

    MyDatabaseHelper myDB;
    ArrayList<Commande> commandeList;
    CommandeCustomAdapter customAdapter;
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_commande);

        recyclerView = findViewById(R.id.recyclerView);
        add_button = findViewById(R.id.add_button);
        refresh_button = findViewById(R.id.refresh_button);
        empty_imageview = findViewById(R.id.empty_imageview);
        no_data = findViewById(R.id.no_data);

        context = this;

        add_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(CommandeMainActivity.this, CommandeMainActivity.class);
                startActivity(intent);
            }
        });
        refresh_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                commandeList.clear();
                storeDataInList();
                customAdapter.notifyDataSetChanged();
            }
        });

        myDB = new MyDatabaseHelper(CommandeMainActivity.this);
        commandeList = new ArrayList<>();

        storeDataInList();

        customAdapter = new CommandeCustomAdapter(context, commandeList);
        customAdapter.setOnDeleteClickListener(new CommandeCustomAdapter.OnDeleteClickListener() {
            @Override
            public void onDeleteClick(int position) {
                deleteCommande(position);
            }
        });
        recyclerView.setAdapter(customAdapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(CommandeMainActivity.this));
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
        String query = "SELECT * FROM " + MyDatabaseHelper.TABLE_COMMANDE;
        Cursor cursor = db.rawQuery(query, null);

        if (cursor.getCount() == 0) {
            empty_imageview.setVisibility(View.VISIBLE);
            no_data.setVisibility(View.VISIBLE);
        } else {
            while (cursor.moveToNext()) {
                int id = cursor.getInt(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_ID));
                String date = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_DATE));
                double montant = cursor.getDouble(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_MONTANT));
                String declarationDate = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_DATE_DECLARATION));
                String updateDate = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_DATE_UPDATE));
                String clientName = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_CLIENT_NAME));
                String clientPhone = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_CLIENT_PHONE));
                String clientCity = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_CLIENT_CITY));
                String status = cursor.getString(cursor.getColumnIndex(MyDatabaseHelper.COLUMN_COMMANDE_STATUS));

                Commande commande = new Commande();
                commande.setId(id);
                commande.setDate(date);
                commande.setMontant(montant);
                commande.setDateDeclaration(declarationDate);
                commande.setDateUpdate(updateDate);
                commande.setClientName(clientName);
                commande.setClientPhone(clientPhone);
                commande.setClientCity(clientCity);
                commande.setStatusCommande(status);
                commandeList.add(commande);
            }
            empty_imageview.setVisibility(View.GONE);
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
        builder.setMessage("Are you sure you want to delete all commandes?");
        builder.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                deleteAllCommandes();
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

    private void deleteCommande(int position) {
        Commande commande = commandeList.get(position);
        int commandeId = commande.getId();

        SQLiteDatabase db = myDB.getWritableDatabase();
        db.delete(MyDatabaseHelper.TABLE_COMMANDE, MyDatabaseHelper.COLUMN_COMMANDE_ID + "=?",
                new String[]{String.valueOf(commandeId)});
        db.close();

        commandeList.remove(position);
        customAdapter.notifyItemRemoved(position);

        if (commandeList.isEmpty()) {
            empty_imageview.setVisibility(View.VISIBLE);
            no_data.setVisibility(View.VISIBLE);
        }
    }

    private void deleteAllCommandes() {
        SQLiteDatabase db = myDB.getWritableDatabase();
        db.delete(MyDatabaseHelper.TABLE_COMMANDE, null, null);
        db.close();

        commandeList.clear();
        customAdapter.notifyDataSetChanged();

        empty_imageview.setVisibility(View.VISIBLE);
        no_data.setVisibility(View.VISIBLE);
    }
}
