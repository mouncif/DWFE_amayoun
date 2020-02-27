import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  
      //motdepasse:''
  displayedColumns: string[] = ['photo','id','email', 'profil', 'datecreateion', 'datefin','action'];
  dataSource = new MatTableDataSource();
  constructor(public service:UtilisateurService,public rout:Router) { }

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
    this.rout.navigateByUrl("/Utilisateur/edit");
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
