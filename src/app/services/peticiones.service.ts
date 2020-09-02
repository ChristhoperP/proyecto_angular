import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class PeticionesService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){

        this.url="https://gatitos-app.herokuapp.com/api/";
        //this.url="http://127.0.0.1/gatitos/ajax/";
        //this.url="https://reqres.in/";
    }

    getUser(): Observable<any>{
        return this._http.get(this.url+"prueba_conexion.php");
        //return this._http.get(this.url+"api/users/2");
    }

    addUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+"signup",params,{headers:headers});
        //return this._http.post(this.url+"api/useres",params,{headers:headers});
        //return this._http.post(this.url+"agregar_usuario.php",params,{headers:headers});
    }

    loginUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+"signin",params,{headers:headers});
    }

    setToken(token):void{
        localStorage.setItem('accessToken', token);
    }

    getToken(): String{
        return localStorage.getItem('accessToken');
    }

    logoutUser(){
        let accessToken = localStorage.getItem('accessToken');
        localStorage.removeItem('accessToken');
    }

}