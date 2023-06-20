import { Component, OnInit } from '@angular/core';
import { Instrumento } from 'src/app/entidades/InstrumentoEntidad';
import { DataManagerService } from 'src/app/servicios/data-manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  instrumentos: Instrumento[]=[];
  loading = true;
  inputValue: string = "";
  resultados: Instrumento[]=[];

  constructor(private dataManagerService:DataManagerService, private router:Router, private modalService: NgbModal){
    
  }

  ngOnInit() {
    this.dataManagerService.getInstrumentosFromDataBase()
    .subscribe(data => {
      for(let instrumento in data){
        this.instrumentos.push(data[instrumento]);
        this.resultados = this.instrumentos;
      }
      this.loading = false;
    })
    
  }

  filtrarInstrumentos(event : any): void {
    this.inputValue = event.target.value;
    this.resultados = this.instrumentos.filter(instrumento =>{
      return (
        instrumento.instrumento.toLowerCase().includes(this.inputValue.toLowerCase()) ||
        instrumento.marca.toLowerCase().includes(this.inputValue.toLowerCase()) ||
        instrumento.modelo.toLowerCase().includes(this.inputValue.toLocaleLowerCase())
      );
    })
  }

  delete(idInstrument: number){
    var opcion = confirm("¿Esta seguro que desea eliminar el instrumento?");
    if (opcion == true) {
      this.dataManagerService.deleteInstrumentoFetch(idInstrument);
      location.reload();
    }

  }
  
  
}
