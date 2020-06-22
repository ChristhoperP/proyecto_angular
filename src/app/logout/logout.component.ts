import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../services/peticiones.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _peticionesService: PeticionesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._peticionesService.logoutUser();
    this._router.navigate(['inicio']);
  }

}
