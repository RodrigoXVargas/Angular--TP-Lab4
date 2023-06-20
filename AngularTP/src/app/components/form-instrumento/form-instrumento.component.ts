import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/InstrumentoEntidad';
import { DataManagerService } from 'src/app/servicios/data-manager.service';

@Component({
  selector: 'app-form-instrumento',
  templateUrl: './form-instrumento.component.html',
  styleUrls: ['./form-instrumento.component.css']
})
export class FormInstrumentoComponent implements OnInit{

  instrumentoSeleccionado: Instrumento = {
    id: 0,
    instrumento: "",
    marca: "",
    modelo: "",
    imagen: "",
    precio: "",
    costo_envio: "",
    cantidad_vendida: "",
    descripcion: ""
  };
  new = false;
  idInstru: number = 0;
  resultadoOperacion = "";

  constructor (private serviceDataManager: DataManagerService, private router: Router, private activeRoute: ActivatedRoute){
    this.activeRoute.params
    .subscribe(
      parametros => {
        this.idInstru = parametros['id'];
        if(this.idInstru != 0){
          this.serviceDataManager.getInstrumentoEnBaseDatosXId(this.idInstru)
          .subscribe(data => {
            this.instrumentoSeleccionado = data;
          })
        }else{
          console.log("ES NUEVO");
        }
      })
  }

  ngOnInit() {

  }

  save(){
    console.log(this.instrumentoSeleccionado)
    this.serviceDataManager.guardarInstrumentoFetch(this.instrumentoSeleccionado)
    
    this.router.navigate(["/crud"]);
    
  }
}
