import { Injectable } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(public client:HttpClient) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    profil: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    photo: new FormControl(''),
    datecreateion: new FormControl(Date.now().toString()),
    datefin: new FormControl(''),
    motdepasse:new FormControl('', Validators.required)
      
      
  });

  private url="http://localhost:3000/user";
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
      profil: '',
      datecreateion: Date.now().toString(),
      datefin: '',
      photo: '',
      email: '',
      motdepasse:''
    });
  }
}
