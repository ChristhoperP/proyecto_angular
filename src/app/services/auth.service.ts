import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Injectable()
export class AuthService{
    constructor(private http: HttpClient){}
    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "aplication/json"
    });

    setToken(token):void{
        localStorage.setItem('accessToken', token);
    }

    getToken(){
        return localStorage.getItem('accessToken');
    }

    logoutUser(){
        let accessToken = localStorage.getItem('accessToken');
        localStorage.removeItem('accessToken');
    }
}