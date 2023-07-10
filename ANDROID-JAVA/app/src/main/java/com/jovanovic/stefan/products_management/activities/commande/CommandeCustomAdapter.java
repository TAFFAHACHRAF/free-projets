package com.jovanovic.stefan.products_management.activities.commande;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.recyclerview.widget.RecyclerView;

import com.jovanovic.stefan.products_management.R;
import com.jovanovic.stefan.products_management.entities.Commande;

import java.util.ArrayList;

public class CommandeCustomAdapter extends RecyclerView.Adapter<CommandeCustomAdapter.MyViewHolder> {

    private Context context;
    private ArrayList<Commande> commandeList;
    private OnDeleteClickListener onDeleteClickListener;

    public CommandeCustomAdapter(Context context, ArrayList<Commande> commandeList) {
        this.context = context;
        this.commandeList = commandeList;
    }

    public void setOnDeleteClickListener(OnDeleteClickListener listener) {
        this.onDeleteClickListener = listener;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.my_row_commande, parent, false);
        return new MyViewHolder(view);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    public void onBindViewHolder(@NonNull final MyViewHolder holder, @SuppressLint("RecyclerView") final int position) {
        final Commande commande = commandeList.get(position);

        holder.commande_id_txt.setText(String.valueOf(commande.getId()));
        holder.commande_date_txt.setText(commande.getDate());
        holder.commande_montant_txt.setText(String.valueOf(commande.getMontant()));
        holder.commande_client_name_txt.setText(commande.getClientName());

        holder.delete_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (onDeleteClickListener != null) {
                    onDeleteClickListener.onDeleteClick(position);
                }
            }
        });

        holder.update_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context, CommandeMainActivity.class);
                intent.putExtra("id", commande.getId());
                intent.putExtra("date", commande.getDate());
                intent.putExtra("montant", commande.getMontant());
                intent.putExtra("declaration_date", commande.getDateDeclaration());
                intent.putExtra("update_date", commande.getDateUpdate());
                intent.putExtra("client_name", commande.getClientName());
                intent.putExtra("client_phone", commande.getClientPhone());
                intent.putExtra("client_city", commande.getClientCity());
                intent.putExtra("status", commande.getStatusCommande());

                // Add other attributes to the intent extras

                if (context instanceof CommandeMainActivity) {
                    CommandeMainActivity activity = (CommandeMainActivity) context;
                    activity.startActivityForResult(intent, 1);
                }
            }
        });
    }

    @Override
    public int getItemCount() {
        return commandeList.size();
    }

    static class MyViewHolder extends RecyclerView.ViewHolder {

        TextView commande_id_txt, commande_date_txt, commande_montant_txt, commande_client_name_txt;
        Button delete_button, update_button;
        LinearLayout mainLayout;

        MyViewHolder(@NonNull View itemView) {
            super(itemView);
            commande_id_txt = itemView.findViewById(R.id.commande_id_txt);
            commande_date_txt = itemView.findViewById(R.id.commande_date_txt);
            commande_montant_txt = itemView.findViewById(R.id.commande_montant_txt);
            commande_client_name_txt = itemView.findViewById(R.id.commande_client_name_txt);

            delete_button = itemView.findViewById(R.id.delete_button);
            update_button = itemView.findViewById(R.id.update_button);
            mainLayout = itemView.findViewById(R.id.mainLayout);

            Animation translate_anim = AnimationUtils.loadAnimation(itemView.getContext(), R.anim.translate_anim);
            mainLayout.setAnimation(translate_anim);
        }
    }

    public interface OnDeleteClickListener {
        void onDeleteClick(int position);
    }
}
