import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

   
      //motdepasse:''
      //nom , prenom , statut , photo , téléphone , email, adresse , ville 
      cannew=false;
      displayedColumns: string[] = ['photo','nom', 'prenom', 'statut','email', 'telephone','adresse','ville','action'];
      dataSource = new MatTableDataSource();
      constructor(public service:ClientService,public userservice:UtilisateurService,public rout:Router) { 


        if(this.userservice.islogedin())
        {
          
          if(this.userservice.getUser().profil=='user')
          {
            this.cannew=false;
            this.displayedColumns= ['photo','nom', 'prenom', 'statut','email', 'telephone','adresse','ville'];
          }else{
            this.cannew=true;
          }
    
        }else{
          window.location.href="/";
        }
      }
    
      initform()
      {
        
        this.service.initializeFormGroup();
      }
      ngOnInit() {
        this.fetchElements();
      }
    
      fetchElements()
      {
        this.service.findAll().subscribe(data=>{if(!data) return; this.dataSource= new MatTableDataSource(data as any);});
      }
    
      onEdit(row)
      {
        this.service.populateForm(row);
        this.rout.navigateByUrl("/client/edit");
      }
    
      onDelete(id)
      {
        if(confirm("sure ?"))
        {
           this.service.delete(id).subscribe(()=>{
           
           this.fetchElements();
          });
        }
      }
}
