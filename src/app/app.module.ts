import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from "./app.routing";//Es necesario para el routing
import { HttpClientModule } from "@angular/common/http";//Es necesario para peticiones externas

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AmigosComponent } from './amigos/amigos.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciaSesionComponent } from './inicia-sesion/inicia-sesion.component';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    AmigosComponent,
    RegistrarseComponent,
    IniciaSesionComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,//Parte del routing
    HttpClientModule //Parte de las peticiones
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
