import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-newutilisateur',
  templateUrl: './newutilisateur.component.html',
  styleUrls: ['./newutilisateur.component.css']
})
export class NewutilisateurComponent implements OnInit {

  constructor(public service: UtilisateurService,private router:Router) { }

 private user={
  id: null,
  profil: '',
  datecreateion: '',
  datefin: '',
  photo: '',
  email: '',
  motdepasse:''
  
}

users:any[]=[

]

add()
{
  this.service.add(this.user).subscribe((user)=>this.users=[user,...this.users]);
}

update()
{
  this.service.update(this.user).subscribe(()=>this.router.navigateByUrl("/Utilisateur"));
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
  }
}

onClear(){
  this.service.initializeFormGroup();
  this.service.form.reset();
  }
  ngOnInit() {
  }

}
