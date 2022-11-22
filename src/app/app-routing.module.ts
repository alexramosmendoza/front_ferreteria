import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {InicioComponent} from "./inicio/inicio.component";
import {AuthGuard} from "./providers/auth.guard";
import {EmpleadoComponent} from "./empleado/empleado.component";

const routes:Routes =[
  {path:'home',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'empleado',component:EmpleadoComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}

