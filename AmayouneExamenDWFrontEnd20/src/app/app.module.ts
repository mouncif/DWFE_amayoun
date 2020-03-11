import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ListeUtilisateurComponent } from './Utilisateur/liste-utilisateur/liste-utilisateur.component';
import { UtilisateurService } from './service/utilisateur.service';
import { NewutilisateurComponent } from './Utilisateur/newutilisateur/newutilisateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Utilisateur/login/login.component';
import { ListeProduitComponent } from './produit/liste-produit/liste-produit.component';
import { NewproduitComponent } from './produit/newproduit/newproduit.component';
import { ListeFournisseurComponent } from './fournisseur/liste-fournisseur/liste-fournisseur.component';
import { NewfournisseurComponent } from './fournisseur/newfournisseur/newfournisseur.component';
import { NewclientComponent } from './client/newclient/newclient.component';
import { ListeClientComponent } from './client/liste-client/liste-client.component';
import { ClientService } from './service/client.service';
import { FournisseurService } from './service/fournisseur.service';
import { ProduitService } from './service/produit.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeUtilisateurComponent,
    NewutilisateurComponent,
    LoginComponent,
    ListeProduitComponent,
    NewproduitComponent,
    ListeFournisseurComponent,
    NewfournisseurComponent,
    NewclientComponent,
    ListeClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UtilisateurService,ClientService,ProduitService,FournisseurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
