import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeUtilisateurComponent } from './Utilisateur/liste-utilisateur/liste-utilisateur.component';
import { NewutilisateurComponent } from './Utilisateur/newutilisateur/newutilisateur.component';
import { LoginComponent } from './Utilisateur/login/login.component';
import { ListeClientComponent } from './client/liste-client/liste-client.component';
import { NewclientComponent } from './client/newclient/newclient.component';
import { ListeFournisseurComponent } from './fournisseur/liste-fournisseur/liste-fournisseur.component';
import { NewfournisseurComponent } from './fournisseur/newfournisseur/newfournisseur.component';
import { ListeProduitComponent } from './produit/liste-produit/liste-produit.component';
import { NewproduitComponent } from './produit/newproduit/newproduit.component';


const routes: Routes = [
  //produit
  {path:"produit",component:ListeProduitComponent},
  {path:"produit/edit",component:NewproduitComponent},
  //fournisseur
  {path:"fournisseur",component:ListeFournisseurComponent},
  {path:"fournisseur/edit",component:NewfournisseurComponent},
  //client
  {path:"client",component:ListeClientComponent},
  {path:"client/edit",component:NewclientComponent},
  //user
  {path:"Utilisateur",component:ListeUtilisateurComponent},
  {path:"Utilisateur/edit",component:NewutilisateurComponent},
  {path:"Login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
