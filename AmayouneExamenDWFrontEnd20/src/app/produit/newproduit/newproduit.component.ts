import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduit',
  templateUrl: './newproduit.component.html',
  styleUrls: ['./newproduit.component.css']
})
export class NewproduitComponent implements OnInit {

  constructor(public service: ProduitService,private router:Router) { }

  private user={
    id: null,
    nom:'',
    nomcourt:'',
    prixbase:'',
    prix:'',
    seuilmaxremise:'',
    unite:'',
    image:'',
    quantiteinitiale:'',
    quantiteactuel:'',
   
 }
 
 users:any[]=[
 
 ]
 
 add()
 {
   this.service.add(this.user).subscribe((user)=>this.users=[user,...this.users]);
 }
 
 update()
 {
   this.service.update(this.user).subscribe(()=>this.router.navigateByUrl("/produit"));
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
     this.router.navigateByUrl("/produit");
     
   }
 }
 
 onClear(){
   this.service.initializeFormGroup();
   this.service.form.reset();
   }
   ngOnInit() {
   }


}
