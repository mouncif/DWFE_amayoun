import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public client:HttpClient) { }
  //nom , prenom , statut , photo , téléphone , email, adresse , ville 
  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    statut: new FormControl(''),
    email: new FormControl('', Validators.email),
    photo: new FormControl(''),
    telephone: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl('') 

      
  });

  private url="http://localhost:3000/client";
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
      nom: '',
      prenom:'',
      statut:'',
      photo: '',
      email: '',
      telephone:'',
      adresse:'',
      ville:''
    });
  }

  //nom , prenom , statut , photo , téléphone , email, adresse , ville 
}
