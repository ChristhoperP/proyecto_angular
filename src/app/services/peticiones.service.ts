import { Injectable } from "@angular/core";
import { Global } from "./global";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class PeticionesService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){

        this.url=Global.url;

    }

    addUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+"signup",params,{headers:headers});
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