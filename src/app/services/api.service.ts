import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "/ApiRestCiclo3UNABMaven/api/";

  constructor(private httpClient: HttpClient, private sesionService:SesionService) { }


  /* usuarios */
  
  checkUsuario(username:string, password:string){
    
    const peticion = `${this.url}usuarios/login`;

    const usuario:any = {
      username,
      password
    }

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"'
    })

    return this.httpClient.post(peticion, usuario, { headers }).pipe( map( (data:any)=>{
      return data;
     }));
  
  }

  addUsuario(nombre:string, correo:string, username:string, password:string){
    
    const peticion = `${this.url}usuarios`;

    const usuario:any = {
      nombre,
      correo,
      username,
      password
    }

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"'
    })

    return this.httpClient.post(peticion, usuario, { headers }).pipe( map( (data:any)=>{
      return data;
     }));
  
  }


  /* equipos */
  getEquipos(){

    const peticion = `${this.url}equipos`;

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': this.sesionService.usuario.hash
    })

    return this.httpClient.get(peticion, { headers }).pipe( map( (data:any)=>{
      return data;
     }));
  
  }


  /* partidos */

  addPartido(usuario:string, local:string, visitante:string, fecha:string){
    
    const peticion = `${this.url}partidos`;

    const partido:any = {
      usuario,
      local,
      visitante,
      fecha,
      golesLocal: -1,
      golesVisitante: -1
    }

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': this.sesionService.usuario.hash
    })

    return this.httpClient.post(peticion, partido, { headers }).pipe( map( (data:any)=>{
      return data;
     }));
  
  }

  getPartidos(){
    
    const peticion = `${this.url}partidos`;

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': this.sesionService.usuario.hash
    })

    return this.httpClient.get(peticion, { headers }).pipe( map( (data:any)=>{
      return data;
    }));
  
  }

  getPartido(id:Number){

    const peticion = `${this.url}partidos/${id}`;

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': this.sesionService.usuario.hash
    })

    return this.httpClient.get(peticion, { headers }).pipe( map( (data:any)=>{
      return data;
    }));

  }

  updatePartido(partido){
    const peticion = `${this.url}partidos/${partido.id}`;

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': this.sesionService.usuario.hash
    })

    return this.httpClient.put(peticion, partido, { headers }).pipe( map( (data:any)=>{
      return data;
    }));
  }



}
