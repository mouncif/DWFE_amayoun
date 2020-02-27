import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeUtilisateurComponent } from './Utilisateur/liste-utilisateur/liste-utilisateur.component';
import { NewutilisateurComponent } from './Utilisateur/newutilisateur/newutilisateur.component';


const routes: Routes = [
  {path:"Utilisateur",component:ListeUtilisateurComponent},
  {path:"Utilisateur/edit",component:NewutilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
