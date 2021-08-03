import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class SesionActivaGuard implements CanActivate {


  constructor(private router:Router, private sesionService:SesionService){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      if(this.sesionService.usuario.id==0){
        return true;  
      }
      else{
        this.router.navigate(['/home']);
        return false;
      }      


  }
  
}
