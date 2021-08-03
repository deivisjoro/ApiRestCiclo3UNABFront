import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  public usuario:Usuario = {
    id: 0,
    nombre: '',
    correo: '',
    username: '',
    password: '',
    hash: ''
  };

  constructor() { 
    //this.guardarStorage();
    this.leerStorage();
  }

  getUsuario():Usuario{
    return this.usuario;
  }

  setUsuario(usuario:Usuario):void{
    this.usuario = usuario;
    this.guardarStorage();
    this.leerStorage();
  }

  resetUsuario():void{
    this.usuario = {
      id: 0,
      nombre: '',
      correo: '',
      username: '',
      password: '',
      hash: ''
    };
    this.guardarStorage();
    this.leerStorage();
  }

  guardarStorage(){
    sessionStorage.setItem("usuario", JSON.stringify(this.usuario));
  }

  leerStorage(){

    if(sessionStorage.getItem("usuario")){
      this.usuario = JSON.parse(sessionStorage.getItem("usuario"));
    }   
    
  }

}

export interface Usuario{
  id: number;
  nombre: string;
  correo: string;
  username: string;
  password: string;
  hash: string;
};
