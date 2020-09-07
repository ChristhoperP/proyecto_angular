import { Component, OnInit } from '@angular/core';
//import { RegistroUsuario } from "../models/registro.usuario";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeticionesService } from "../services/peticiones.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

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
  public errrUser: boolean=false;
  public errEmail: boolean=false;
  public new_user: any;

  public hubo_err: number=2;
  public mensaje: String='';
  public usernameRep: String='';

  constructor(
    private _peticionesService: PeticionesService,
    private _router: Router,
    private spinner: NgxSpinnerService
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
    this.hubo_err=2;

    if(this.registro_usuario.valid){
      //console.log(this.registro_usuario.value);
      this.new_user.nombre=this.registro_usuario.value.nombre;
      this.new_user.apellidos=this.registro_usuario.value.apellidos;
      this.new_user.username=this.registro_usuario.value.username;
      this.new_user.email=this.registro_usuario.value.email;
      this.new_user.password=this.registro_usuario.value.password;

      this.spinner.show();

      this._peticionesService.addUser(this.new_user).subscribe(
        response=>{
          //alert(response);
          this.hubo_err=0;
          this.spinner.hide();
          console.log(response);
          this.registro_usuario.reset();
          this._peticionesService.setToken(response.token);
          this._router.navigate(['inicio']);
        },
        error=>{
          this.spinner.hide();

          console.log(error);
          this.mensaje=error.error.message;

          if(this.mensaje=="El username ya está en uso."){
            this.errrUser=true;
          }else if(this.mensaje=="El email ya está en uso."){
            this.errEmail=true;
          }

          this.hubo_err=1;

        }
      );
    }
    
    this.hizo_sub=false;
  }

  get nombre() { return this.registro_usuario.get('nombre');}
  get apellidos() { return this.registro_usuario.get('apellidos');}
  get username() { return this.registro_usuario.get('username');}
  get email() { return this.registro_usuario.get('email');}
  get password() { return this.registro_usuario.get('password');}

}
