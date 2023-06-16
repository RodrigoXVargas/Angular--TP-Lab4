import { Component, OnInit } from '@angular/core';
import { DataManagerService } from 'src/app/servicios/data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  instrumentosArr: any[] =[];

  constructor(private dataManagerService: DataManagerService, private router: Router){

  }

  ngOnInit(): void {
    this.instrumentosArr = this.dataManagerService.getInstrumentos();
    console.log(this.instrumentosArr);
  }

  public verInstrumento(idx:string){
    console.log("ID Instrumento"+ idx);
    this.router.navigate(["/detalleProducts", idx])
  }


}
