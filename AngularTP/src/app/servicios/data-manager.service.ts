import { Injectable } from '@angular/core';
import * as data from "src/assets/data/instrumentos.json"

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  instrumentosFile: any =(data as any).default;

  constructor() {
    console.log("Servicio Cargado!!!");
    console.log(this.instrumentosFile);
  }

  public getInstrumentos():any[]{
    return this.instrumentosFile.instrumentos;
    console.log(this.instrumentosFile.instrumentos);
  }

  public getInstrumentosXId(idx:string): any{
    for(let instrumento of this.instrumentosFile.instrumentos){
      if(instrumento.id == idx){
        return instrumento;
      }
    }
  }

}
