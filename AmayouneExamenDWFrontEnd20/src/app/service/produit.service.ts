import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(public client:HttpClient) { }
  //nom , prenom , statut , photo , téléphone , email, adresse , ville 
  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    nomcourt: new FormControl(''),
    prixbase: new FormControl(''),
    prix: new FormControl(''),
    seuilmaxremise: new FormControl(''),
    unite: new FormControl(''),
    image: new FormControl(''),
    quantiteinitiale: new FormControl(''),
    quantiteactuel: new FormControl(''),

      
  });

  private url="http://localhost:3000/produit";
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
      prixbase:'',
      prix:'',
      seuilmaxremise:'',
      unite:'',
      image:'',
      quantiteinitiale:'',
      quantiteactuel:'',
    });
  }
}
