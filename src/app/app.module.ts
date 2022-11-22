import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { InicioComponent } from './inicio/inicio.component';
import {AuthGuard} from "./providers/auth.guard";
import {MenubarModule} from 'primeng/menubar';
import { EmpleadoComponent } from './empleado/empleado.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ToastModule,
    MenubarModule,
    TableModule,
    DialogModule,
    TooltipModule

  ],
  providers: [MessageService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
