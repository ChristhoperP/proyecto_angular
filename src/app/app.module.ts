import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from "./app.routing";//Es necesario para el routing
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";//Es necesario para peticiones externas

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AmigosComponent } from './amigos/amigos.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciaSesionComponent } from './inicia-sesion/inicia-sesion.component';
import { ExternoComponent } from './externo/externo.component';
import { PeticionesService } from './services/peticiones.service';
import { AuthService } from "./services/auth.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    AmigosComponent,
    RegistrarseComponent,
    IniciaSesionComponent,
    ExternoComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    routing,//Parte del routing
    HttpClientModule //Parte de las peticiones
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    appRoutingProviders,
    PeticionesService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
