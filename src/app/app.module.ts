import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AmigosComponent } from './amigos/amigos.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciaSesionComponent } from './inicia-sesion/inicia-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    AmigosComponent,
    RegistrarseComponent,
    IniciaSesionComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
