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

  constructor(public service:UtilisateurService,public router:Router) { }

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
      for(let item in data)
      {
          if(item.email==this.form.value.ndc && item.motdepasse==this.form.value.ndc)
          {
              localStorage.setItem("user",item);
          }
      }
    })
  }
}
