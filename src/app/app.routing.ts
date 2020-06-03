//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { InicioComponent } from "./inicio/inicio.component";
import { AmigosComponent } from "./amigos/amigos.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { RegistrarseComponent } from "./registrarse/registrarse.component";
import { IniciaSesionComponent } from "./inicia-sesion/inicia-sesion.component";

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'amigos', component: AmigosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'registrarse', component: RegistrarseComponent},
    {path: 'iniciar-sesion', component: IniciaSesionComponent},
    {path: '**', component: InicioComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);