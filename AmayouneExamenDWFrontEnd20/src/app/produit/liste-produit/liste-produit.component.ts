import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ProduitService } from 'src/app/service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  
  displayedColumns: string[] = ['image','nom','nomcourt','prixbase','prix','seuilmaxremise','unite','quantiteinitiale','quantiteactuel','action'];
  
  dataSource = new MatTableDataSource();
  constructor(public service:ProduitService,public rout:Router) { }

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
    this.rout.navigateByUrl("/produit/edit");
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
