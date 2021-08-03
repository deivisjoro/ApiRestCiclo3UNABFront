import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html'
})
export class CerrarSesionComponent implements OnInit {

  constructor(private sesionService:SesionService, private router:Router) { 
    this.sesionService.resetUsuario();
    this.router.navigate(['/login']);
    
  }

  ngOnInit(): void {
  }

}
