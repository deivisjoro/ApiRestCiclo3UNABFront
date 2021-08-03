import { Component } from '@angular/core';
import { SesionService, Usuario } from './services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  usuario:Usuario;

  constructor(public sesionService:SesionService){ 
    this.usuario = this.sesionService.getUsuario();
  }

}
