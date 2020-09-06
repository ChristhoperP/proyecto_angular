import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { PeticionesService } from "../services/peticiones.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(
    private _peticionesService: PeticionesService
  ) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${this._peticionesService.getToken()}`
      }
    });

    return next.handle(tokenizeReq);
  }

}
