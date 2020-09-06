import { Injectable } from '@angular/core';
import { Global } from "./global";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {

    this.url = Global.url;

  }

  getUser(): Observable<any> {
    return this._http.get(this.url + "getuser");
  }

}
