import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        //this.url="http://127.0.0.1/gatitos/ajax/";
        this.url="https://reqres.in/";
    }

    getUser(): Observable<any>{
        //return this._http.get(this.url+"prueba_conexion.php");
        return this._http.get(this.url+"api/users/2");
    }

    addUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+"api/useres",params,{headers:headers});
    }

}