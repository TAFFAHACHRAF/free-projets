// Importez le module HttpClientModule en premier
import { HttpClientModule } from '@angular/common/http';

// Importez ensuite les autres modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccueilPage } from './accueil.page';
import { AccueilPageRoutingModule } from './accueil-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule, // Importez le module HttpClientModule avant AccueilPageRoutingModule
    AccueilPageRoutingModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule { }
