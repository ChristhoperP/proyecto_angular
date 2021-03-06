import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: any;

  constructor(private _userService: UserService, private _authService: AuthService) { 
    this.user={
      nombre: "",
      apellidos: "",
      username:"",
      email: ""
    };
  }

  ngOnInit(): void {

    this._userService.getUser().subscribe(
      response=>{
        console.log(response);
        this.user.nombre=response.nombre;
        this.user.apellidos=response.apellidos;
        this.user.username=response.username;
        this.user.email=response.email;
      },
      error=>{
        alert(error.error.message);
        this._authService.logoutUser();
      }
    );

  }

}
