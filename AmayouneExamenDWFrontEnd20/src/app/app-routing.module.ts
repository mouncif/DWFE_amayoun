import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeUtilisateurComponent } from './Utilisateur/liste-utilisateur/liste-utilisateur.component';
import { NewutilisateurComponent } from './Utilisateur/newutilisateur/newutilisateur.component';
import { LoginComponent } from './Utilisateur/login/login.component';


const routes: Routes = [
  {path:"Utilisateur",component:ListeUtilisateurComponent},
  {path:"Utilisateur/edit",component:NewutilisateurComponent},
  {path:"Login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
