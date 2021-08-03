import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-partido-add',
  templateUrl: './partido-add.component.html',
  styleUrls: ['./partido-add.component.css']
})
export class PartidoAddComponent implements OnInit {

  equipos:any[] = [];
  error:boolean = false;

  constructor(private apiService: ApiService, private sesionService:SesionService, private router:Router) {

    this.apiService.getEquipos().subscribe((response)=>{
      this.equipos = JSON.parse(JSON.stringify(response)); 
    });


  }

  ngOnInit(): void {
  }

    
  registrarPartido(local:string, visitante:string, fecha:string):any{

    this.error = false;

    this.apiService.addPartido(this.sesionService.usuario.id.toString(), local, visitante, fecha).subscribe((response)=>{
      
      let partido = JSON.parse(JSON.stringify(response));  


      console.log(partido);

      if(partido.id==0){
        this.error = true;
      }
      else{ 
        this.router.navigate(['/partidos-list']);        
      }
      
    }); 
  
  }

}
