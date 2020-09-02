import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PeticionesService } from "../services/peticiones.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _peticionesService: PeticionesService,
    private _router: Router){}
  
  canActivate(){
    if(this._peticionesService.getToken()){
      //validar token
      //console.log(this._peticionesService.getToken());
      return true;
    }else{
      //console.log(this._peticionesService.getToken());
      this._router.navigate(['iniciar-sesion']);
      return false;
    }
  }
  
}
