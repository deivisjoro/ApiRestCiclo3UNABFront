import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup;

  error:boolean = false;
  ingresado:boolean = false;

  constructor(private apiService:ApiService, private router:Router, private formBuilder: FormBuilder) {
    this.crearFormulario(); 
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched;
  }

  get correoNoValido(){
    return this.formulario.get('correo').invalid && this.formulario.get('correo').touched;
  }

  get usernameNoValido(){
    return this.formulario.get('username').invalid && this.formulario.get('username').touched;
  }

  get passwordNoValido(){
    return this.formulario.get('password').invalid && this.formulario.get('password').touched;
  }

  guardarDatos():any{

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
      password: ''
    };

    this.apiService.addUsuario(this.formulario.value.nombre, this.formulario.value.correo, this.formulario.value.username, this.formulario.value.password).subscribe((response)=>{
      usuario = JSON.parse(JSON.stringify(response));  

      if(usuario.id==0){
        this.error = true;
      }
      else{        
        this.error = false;  
        this.ingresado = true;          
      }
      
    }); 

  }

}
