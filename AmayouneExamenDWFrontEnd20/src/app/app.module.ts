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

@NgModule({
  declarations: [
    AppComponent,
    ListeUtilisateurComponent,
    NewutilisateurComponent,
    LoginComponent
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
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
