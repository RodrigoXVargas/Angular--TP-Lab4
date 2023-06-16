import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from 'src/app/servicios/data-manager.service';

@Component({
  selector: 'app-detalle-instrument',
  templateUrl: './detalle-instrument.component.html',
  styleUrls: ['./detalle-instrument.component.css']
})
export class DetalleInstrumentComponent implements OnInit{

  instrumento : any;

  constructor(private activatedRoute:ActivatedRoute, private dataManagerService: DataManagerService){
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.instrumento = this.dataManagerService.getInstrumentosXId(params['id']);
    })
  }
  
  ngOnInit():void{};
}
