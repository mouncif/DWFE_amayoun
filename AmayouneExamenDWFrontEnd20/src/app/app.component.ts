import { CommonModule } from '@angular/common'; 
import { Component, NgModule } from '@angular/core';
import { UtilisateurService } from './service/utilisateur.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({imports:[CommonModule,BrowserModule ],
  declarations: [AppComponent]})

export class AppComponent {
  title = 'AmayouneExamenDWFrontEnd20';
  nomuser =null;
  isloggedin =false;

  menu=[];
  menus={
    guest:[{name:"Login",path:"/Login"}],

    

    user:[
      {name:"Liste de Produits",path:"/produit"},
      {name:"Liste de Clients",path:"/client"},
      {name:"Liste de Fournisseurs",path:"/fournisseur"},
    ],

    admin:[{name:"Utilisateurs",path:"/Utilisateur"},
    {name:"Liste de Produits",path:"/produit"},
    {name:"Liste de Clients",path:"/client"},
    {name:"Liste de Fournisseurs",path:"/fournisseur"}],
  }
  constructor(public service:UtilisateurService)
  {
    this.menu= this.menus.guest;
    if(this.service.islogedin()!=null)
    {
      
      this.nomuser = service.getUser().email;
      this.isloggedin=true;
      if(service.getUser().profil=='admin')
      {
        this.menu= this.menus.admin;
      }else 
      {
        this.menu= this.menus.user;
      }
      console.log(this.menu[0].name);
    }
    
  }

  logout()
  {
    this.service.logOutUser();
    this.isloggedin=false;
    //window.location.href="/Login";
    window.location.reload();
  }
}
