// Importez les modules spécifiques à Angular en premier
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Importez ensuite les modules d'Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Importez les autres modules de votre application
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilPageModule } from './accueil/accueil.module'; // Utilisez le bon chemin relatif ici

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AccueilPageModule], // Importez AccueilPageModule ici
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
