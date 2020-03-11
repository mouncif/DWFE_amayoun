import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(public client:HttpClient) { }
  //nom , prenom , statut , photo , téléphone , email, adresse , ville 
  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    nomcourt: new FormControl(''),
    ville: new FormControl(''),
    Fix: new FormControl(''),
    Tel: new FormControl(''),
    Fax: new FormControl(''),
    adresse: new FormControl(''),
    email: new FormControl('',Validators.email),

      
  });

  private url="http://localhost:3000/fournisseur";
  findAll()
  {
    return this.client.get(this.url);
  }

  delete(id){
    return this.client.delete(this.url+"/"+id);
  }

  add(user)
  {
    
    return this.client.post (this.url,user);
  }
  populateForm(row)
  {
    this.form.setValue(row);
  }
  update(user)
  {
    return this.client.put(`${this.url}/${user.id}`,user);
  }

 
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom:'',
      nomcourt:'',
      ville:'',
      Fix:'',
      Tel:'',
      Fax:'',
      adresse:'',
      email:'',
    });
  }
}
