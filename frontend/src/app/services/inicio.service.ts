//Injectable
import { Injectable } from "@angular/core";


@Injectable()
export class InicioService{
    public home: JSON;

    constructor(){
        this.home=JSON.parse('{"saludo":"hola mundo"}');

    }

    getHome(): JSON{
        return this.home;
    }

}