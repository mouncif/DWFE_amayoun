import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/service/fournisseur.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html',
  styleUrls: ['./liste-fournisseur.component.css']
})
export class ListeFournisseurComponent implements OnInit {

    //motdepasse:''
    cannew=false;
      displayedColumns: string[] = ['nom','nomcourt','ville','Fix','Tel','Fax','adresse','email','action'];
      dataSource = new MatTableDataSource();
      constructor(public service:FournisseurService,public userservice:UtilisateurService,public rout:Router) { 

        if(this.userservice.islogedin())
    {
      
      if(this.userservice.getUser().profil=='user')
      {
        this.cannew=false;
        this.displayedColumns=['nom','nomcourt','ville','Fix','Tel','Fax','adresse','email'];
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
        this.rout.navigateByUrl("/fournisseur/edit");
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
