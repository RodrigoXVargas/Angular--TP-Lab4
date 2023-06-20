import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Instrumento } from '../entidades/InstrumentoEntidad';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  public instrumentosData: Instrumento[] = [];
  public instrumentoEncontrado: Instrumento = new Instrumento();
  urlServer = "http://localhost:8080/api/instrumentos/";

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
  }
 
  public getInstrumentos() :any[]{
    return this.instrumentosData;
  }

  public getInstrumentosXId(idx: number): any {
    for (let instrumento of this.instrumentosData) {
      if (instrumento.id == idx) {
        return instrumento;
      }
    }
  }

  getInstrumentosFromDataBase(){
    return this.http.get<Instrumento[]>(this.urlServer+"getAll").pipe(
      map( instrumentosData => instrumentosData));
  }

  getInstrumentoEnBaseDatosXId(idx:number){
    return this.http.get<Instrumento>(this.urlServer+"get/" + idx).pipe(
      map( instrumentoEncontrado => instrumentoEncontrado));
  }

  /*
  guardarInstrumento(instrumento: Instrumento) {
    if (instrumento && instrumento.id > 0) {
      console.log("update");
      return this.http.put<Instrumento>(this.urlServer + "update/" + instrumento.id, instrumento);
    }else {
      console.log("save");
      return this.http.post<Instrumento>(this.urlServer + "save", instrumento);
    }    
  }*/

  
  deleteInstrumento(idInstrumento :number){
    let url = this.urlServer + "delete/"+ idInstrumento;
    console.log(url)
    return this.http.delete<Instrumento>(url);
  }

  /*
  async getAllInstrumentos() {
    let urlServer = "http://localhost:8080/api/instrumentos/getAll";
    let response = await fetch(urlServer, {
      method: 'GET',
      headers: {
        'Content-type': "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors'
    });
    console.log(response);
    return await response.json() as Instrumento[];
  }*/

  /*
  async getInstrumentoById(id: number) {
    let urlServer = "http://localhost:8080/api/instrumentos/get/" + id;
    let response = await fetch(urlServer, {
      method: 'GET',
      headers: {
        'Content-type': "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors'
    });
    console.log(response);
    return await response.json() as Instrumento;
  }*/



  async deleteInstrumentoFetch(idInstrumento: number) {
    let urlServer = "http://localhost:8080/api/instrumentos/delete/"+idInstrumento;
    await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
  };

  

  
  async guardarInstrumentoFetch(instrumento: Instrumento) {
    let urlServer = 'http://localhost:8080/api/instrumentos/save';
    let method = "POST";
    if (instrumento && instrumento.id > 0) {
      urlServer = 'http://localhost:8080/api/instrumentos/update/'+ instrumento.id;
      method = "PUT";
    }
    await fetch(urlServer, {
      "method": method,
      "body": JSON.stringify(instrumento),
      "headers": {
        "Content-Type": 'application/json'
      }
    });
    console.log("Guardado con Exito")
  }


}
