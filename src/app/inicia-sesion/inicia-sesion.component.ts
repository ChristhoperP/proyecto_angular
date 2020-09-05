import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeticionesService } from "../services/peticiones.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-inicia-sesion',
  templateUrl: './inicia-sesion.component.html',
  styleUrls: ['./inicia-sesion.component.css']
})
export class IniciaSesionComponent implements OnInit {

  passPattern: any=`^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$`;

  createFormGroup(){
    return new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50), Validators.pattern(this.passPattern)])
    });
  }

  public inicio_usuario: FormGroup;
  public hizo_sub: boolean=false;
  public hubo_err: number=2;
  public mensaje: String='';

  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService,
    private _router: Router
  ) { 
    this.inicio_usuario=this.createFormGroup();
    this.new_user={
      username:"",
      password:""
    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.hizo_sub=true;
    this.hubo_err=2;

    if(this.inicio_usuario.valid){

      this.new_user.username=this.inicio_usuario.value.username;
      this.new_user.password=this.inicio_usuario.value.password;

      this._peticionesService.loginUser(this.new_user).subscribe(
        response=>{
          this.hizo_sub=false;
          this.hubo_err=0;
          //console.log(response);
          this._peticionesService.setToken(response.token);
          this._router.navigate(['inicio']);
        },
        error=>{
          this.hubo_err=1;
          console.log(error);
          this.mensaje=error.error.message;
        }
      );
    }
  }


  get username() { return this.inicio_usuario.get('username');}
  get password() { return this.inicio_usuario.get('password');}
}
