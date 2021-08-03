import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from 'src/app/services/api.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-partido-editar',
  templateUrl: './partido-editar.component.html',
  styleUrls: ['./partido-editar.component.css']
})
export class PartidoEditarComponent implements OnInit {

  partido;
  error = false;

  constructor(private activatedRoute:ActivatedRoute, private sesionService:SesionService, private apiService:ApiService, private router:Router) {

    this.partido = {
      fecha: "",
      golesLocal: -1,
      golesVisitante: -1,
      id: 0,
      local: 0,
      localNombre: "",
      usuario: 0,
      usuarioNombre: "",
      visitante: 0,
      visitanteNombre: ""
    }

    this.activatedRoute.params.subscribe(params=>{

      let id = params.id;
      this.apiService.getPartido(id).subscribe((response)=>{

        
        this.partido = JSON.parse(JSON.stringify(response));

        if(this.sesionService.usuario.id != this.partido.usuario){
          this.router.navigate(['/partidos-list']);          
        }

        if(this.partido.golesLocal<0){
          this.partido.golesLocal = 0;
        }

        if(this.partido.golesVisitante<0){
          this.partido.golesVisitante = 0;
        }

      });

      

    })  
  }

  actualizarPartido(goles_local, goles_visitante){
    this.partido.golesLocal = goles_local;
    this.partido.golesVisitante = goles_visitante;
    this.error = false;
    
    this.apiService.updatePartido(this.partido).subscribe((response)=>{

      let respuesta = JSON.parse(JSON.stringify(response));  
      
      if(respuesta.id!=0){
        this.error = false;
        this.router.navigate(['/partidos-list']);
      }
      else{
        this.error = true;
      }

    }); 

  }

  regresar(){
    this.router.navigate(['/partidos-list']);
  }

  ngOnInit(): void {
  }

}
