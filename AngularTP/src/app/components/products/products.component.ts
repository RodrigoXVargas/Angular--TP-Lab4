import { Component, OnInit } from '@angular/core';
import { DataManagerService } from 'src/app/servicios/data-manager.service';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/InstrumentoEntidad';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  instrumentosArr: Instrumento[] = [];
  loading = true;

  constructor(private dataManagerService: DataManagerService, private router: Router){

  }

  ngOnInit() {
    this.dataManagerService.getInstrumentosFromDataBase()
    .subscribe(data => {
      for(let instrumento in data){
        this.instrumentosArr.push(data[instrumento]);
      }
      this.loading = false;
    })
  }

  public validarURLImagen(url: string): string {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    } else {
      return "http://localhost:4200/assets/img/" + url;
    }
  }


}
