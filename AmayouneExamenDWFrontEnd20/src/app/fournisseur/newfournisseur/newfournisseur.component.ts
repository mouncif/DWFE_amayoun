import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/service/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newfournisseur',
  templateUrl: './newfournisseur.component.html',
  styleUrls: ['./newfournisseur.component.css']
})
export class NewfournisseurComponent implements OnInit {

  constructor(public service: FournisseurService,private router:Router) { }

  private user={
    id: null,
    nom: '',
    prenom:'',
    statut:'',
    photo: '',
    email: '',
    telephone:'',
    adresse:'',
    ville:''
   
 }
 
 users:any[]=[
 
 ]
 
 add()
 {
   this.service.add(this.user).subscribe((user)=>this.users=[user,...this.users]);
 }
 
 update()
 {
   this.service.update(this.user).subscribe(()=>this.router.navigateByUrl("/fournisseur"));
 }
 
 onSubmit()
 {
   if(this.service.form.valid)
   {
     this.user = this.service.form.value;
     if(this.service.form.value.id==null)
     {
       console.log(this.user);
       this.add();
       this.service.form.reset();
       
     }else{
       
       console.log(this.user);
       this.update();
       this.service.form.reset();
       
     }
     this.service.initializeFormGroup();
     this.router.navigateByUrl("/fournisseur");
     
   }
 }
 
 onClear(){
   this.service.initializeFormGroup();
   this.service.form.reset();
   }
   ngOnInit() {
   }

}
