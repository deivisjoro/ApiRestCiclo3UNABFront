import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos:any[] = [];
  usuario:any = {};

  constructor(private apiService: ApiService, private sesionService:SesionService, private router:Router) {

    this.usuario = sesionService.usuario;

    this.apiService.getPartidos().subscribe((response)=>{      
      

      this.partidos = JSON.parse(JSON.stringify(response));  
      
      this.partidos.forEach((partido)=>{
        if(partido.golesLocal==-1){
          partido.golesLocal = '-';
        }

        if(partido.golesVisitante==-1){
          partido.golesVisitante = '-';
        }
      })

    }); 

  }

  ngOnInit(): void {
  }



}
