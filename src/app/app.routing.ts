//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { InicioComponent } from "./inicio/inicio.component";
import { AmigosComponent } from "./amigos/amigos.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { RegistrarseComponent } from "./registrarse/registrarse.component";
import { IniciaSesionComponent } from "./inicia-sesion/inicia-sesion.component";
import { LogoutComponent } from "./logout/logout.component";
import { AdminComponent } from "./admin/admin.component";

import { AuthGuard } from "./guards/auth.guard";

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'amigos', component: AmigosComponent, canActivate: [AuthGuard]},
    {path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'registrarse', component: RegistrarseComponent},
    {path: 'iniciar-sesion', component: IniciaSesionComponent},
    {path: 'logout', component: LogoutComponent},
    {path: '**', component: InicioComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
