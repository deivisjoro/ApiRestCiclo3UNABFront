import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SesionService, Usuario } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;

  error:boolean = false;

  constructor(private apiService:ApiService, private sesionService:SesionService, private router:Router, private formBuilder: FormBuilder) {
    this.crearFormulario(); 

  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get usernameNoValido(){
    return this.formulario.get('username').invalid && this.formulario.get('username').touched;
  }

  get passwordNoValido(){
    return this.formulario.get('password').invalid && this.formulario.get('password').touched;
  }

  verificarDatos():any{

    if(this.formulario.invalid){

      Object.values(this.formulario.controls).forEach(control=>{
        control.markAsTouched();
      });

      return;

    }
    

    this.error = false;

    let usuario = {
      id: 0,
      nombre: '',
      correo: '',
      username: '',
      password: '',
      hash: ''
    };

    this.apiService.checkUsuario(this.formulario.value.username, this.formulario.value.password).subscribe((response)=>{
      usuario = JSON.parse(JSON.stringify(response));   

      if(usuario.id==0){      
        this.sesionService.setUsuario(usuario);
        this.sesionService.guardarStorage();
        this.error = true;
      }
      else{             
        if(Number.isInteger(usuario.id)){
          this.sesionService.setUsuario(usuario);   
          this.error = false;
          this.router.navigate(['/home']);
        }
        else{
          this.error = true;
        }
            
      }
      
    }); 

  }

}
