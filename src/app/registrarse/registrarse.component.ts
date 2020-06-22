import { Component, OnInit } from '@angular/core';
//import { RegistroUsuario } from "../models/registro.usuario";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeticionesService } from "../services/peticiones.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  emailPattern: any="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
  passPattern: any=`^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$`;

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      apellidos: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      username: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      email: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50), Validators.pattern(this.emailPattern)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50), Validators.pattern(this.passPattern)])
    });
  }

  public registro_usuario: FormGroup;
  public hizo_sub: boolean=false;

  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService,
    private _router: Router
  ) { 
    this.registro_usuario=this.createFormGroup();
    this.new_user={
      nombre: "",
      apellidos: "",
      username:"",
      email: "",
      password:""
    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.hizo_sub=true;

    if(this.registro_usuario.valid){
      //console.log(this.registro_usuario.value);
      this.new_user.nombre=this.registro_usuario.value.nombre;
      this.new_user.apellidos=this.registro_usuario.value.apellidos;
      this.new_user.username=this.registro_usuario.value.username;
      this.new_user.email=this.registro_usuario.value.email;
      this.new_user.password=this.registro_usuario.value.password;

      this._peticionesService.addUser(this.new_user).subscribe(
        response=>{
          //alert(response);
          console.log(response);
          this.registro_usuario.reset();
          this.hizo_sub=false;
          this._peticionesService.setToken(response.token);
          this._router.navigate(['inicio']);
        },
        error=>{
          alert(<any>error);
        }
      );
    }
  }

  get nombre() { return this.registro_usuario.get('nombre');}
  get apellidos() { return this.registro_usuario.get('apellidos');}
  get username() { return this.registro_usuario.get('username');}
  get email() { return this.registro_usuario.get('email');}
  get password() { return this.registro_usuario.get('password');}

}
