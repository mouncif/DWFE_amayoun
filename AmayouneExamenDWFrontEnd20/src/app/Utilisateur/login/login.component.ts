import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Router, Data } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:UtilisateurService,public router:Router) { 

      if(this.service.islogedin())
      {
        
        
          window.location.href="/";
        
      }
  }

  username="";
  password="";
  form= new FormGroup({
    ndc:new FormControl(''),
    mdp:new FormControl('')
  })

  
  
  ngOnInit() {
  }

  
  login()
  {
    this.service.findAll().subscribe((data)=>{
      
      
      for(let itema in data)
      {
        
         
        let item:any = data[itema];
          if(item.email==this.form.value.ndc && item.motdepasse==this.form.value.mdp)
          {
              
                this.service.logUser({id:item.id,email:item.email,nom:item.nom,profil:item.profil});
                console.log("connected "+ item.profil); 
                window.location.reload();
                console.log(this.service.getUser().profil);
          }
      }
    })
  }

 
}
