import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/service/fournisseur.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html',
  styleUrls: ['./liste-fournisseur.component.css']
})
export class ListeFournisseurComponent implements OnInit {

    //motdepasse:''
      
      displayedColumns: string[] = ['nom','nomcourt','ville','Fix','Tel','Fax','adresse','email','action'];
      dataSource = new MatTableDataSource();
      constructor(public service:FournisseurService,public rout:Router) { }
    
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
