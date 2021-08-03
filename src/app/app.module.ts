import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PartidoAddComponent } from './components/partido-add/partido-add.component';
import { PartidoListComponent } from './components/partido-list/partido-list.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import { PartidoEditarComponent } from './components/partido-editar/partido-editar.component';

import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    PartidoAddComponent,
    PartidoListComponent,
    CerrarSesionComponent,
    PartidoEditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot( ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
