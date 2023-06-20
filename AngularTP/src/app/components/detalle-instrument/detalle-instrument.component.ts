import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instrumento } from 'src/app/entidades/InstrumentoEntidad';
import { DataManagerService } from 'src/app/servicios/data-manager.service';

@Component({
  selector: 'app-detalle-instrument',
  templateUrl: './detalle-instrument.component.html',
  styleUrls: ['./detalle-instrument.component.css']
})
export class DetalleInstrumentComponent implements OnInit {

  instrumento: Instrumento = new Instrumento;

  constructor(private activatedRoute: ActivatedRoute, private dataManagerService: DataManagerService) {
    this.activatedRoute.params.subscribe(params => {
      this.dataManagerService.getInstrumentoEnBaseDatosXId(params["id"])
        .subscribe(instrumentoEncontrado => {
          this.instrumento = instrumentoEncontrado;
        });
    })
  }

  ngOnInit(): void { };

  public validarURLImagen(url: string): string {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    } else {
      return "http://localhost:4200/assets/img/" + url;
    }
  }


}
