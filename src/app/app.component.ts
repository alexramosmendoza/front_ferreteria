import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ApiService} from "./providers/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[]=[];
  title = 'front-ferreteria';

  constructor(public api:ApiService,private router:Router) {
    this.items=[
      {label:'Empleado',command: (event) => {
        this.router.navigate(['/empleado'])}},
      /*{label:'Cliente',command: (event) => {
        this.router.navigate(['/cliente'])}},*/
      {label:'Proveedor'},
      {label:'Producto'},
      {label:'Factura'},
      {label:'Venta'},
      {label:'Compra'},
      {label:'Salir',command: (event) => {this.api.logOut()}},
    ]
  }
}
