import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PartidoAddComponent } from './components/partido-add/partido-add.component';
import { PartidoListComponent } from './components/partido-list/partido-list.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import { AutorizacionLoginGuard } from './guards/autorizacion-login.guard';
import { SesionActivaGuard } from './guards/sesion-activa.guard';
import { PartidoEditarComponent } from './components/partido-editar/partido-editar.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'registro', component: RegistroComponent, canActivate: [SesionActivaGuard]},
    {path: 'login', component: LoginComponent, canActivate: [SesionActivaGuard]},
    {path: 'partidos-add', component: PartidoAddComponent, canActivate: [AutorizacionLoginGuard]},
    {path: 'partidos-list', component: PartidoListComponent, canActivate: [AutorizacionLoginGuard]},
    {path: 'partidos-editar/:id', component: PartidoEditarComponent, canActivate: [AutorizacionLoginGuard]},
    {path: 'cerrar-sesion', component: CerrarSesionComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];