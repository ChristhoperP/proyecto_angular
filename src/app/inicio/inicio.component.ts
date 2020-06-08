import { Component, OnInit } from '@angular/core';
import { InicioService } from "../services/inicio.service";
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [InicioService,PeticionesService]
})
export class InicioComponent implements OnInit {
  public saludo: JSON;
  public hola: string="esto es una prueba";
  public user: any;

  constructor(
    private _inicioService: InicioService,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    //this.saludo=this._inicioService.getHome();
    this._peticionesService.getUser().subscribe(
      result=>{
        console.log(result);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
