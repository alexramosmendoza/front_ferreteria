import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado:any =[]
  ver_form_empleado = false
  form_empleado = this.fb.group({
    id:[''],
    nombre:[''],
    apellido:[''],
    telefono:[''],
    nombre_usuario:[''],
    Contrasena:[''],

  })
  empleado_seleccionado: any;

  constructor(private api:ApiService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.get_empleado()
  }

  get_empleado(){
    this.api.get('empleado')
      .subscribe(data=>{
        this.empleado = data
        console.log(data)
      })
  }

  guardar_empleado() {
    if(this.form_empleado.value['id']){
      this.update_empleado()}
    else{
      this.add_empleado()
  }

  }

  add_empleado(){
    this.api.post('empleado',this.form_empleado.value)
      .subscribe(data=>{
        this.get_empleado()
        this.ver_form_empleado = false
        this.form_empleado.reset()
      })
  }

  update_empleado(){
    this.api.update('empleado',this.form_empleado.value,this.form_empleado.value['id'])
      .subscribe(data=>{
        this.get_empleado()
        this.ver_form_empleado = false
        this.form_empleado.reset()

      })

  }

  llenar_empleado() {
    this.form_empleado.reset()
    this.form_empleado.patchValue({
      id: this.empleado_seleccionado.id,
      nombre: this.empleado_seleccionado.nombre,
      apellido:this.empleado_seleccionado.apellido,
      telefono:this.empleado_seleccionado.telefono,
      nombre_usuario: this.empleado_seleccionado.nombre_usuario,
      Contrasena:this.empleado_seleccionado.Contrasena,
    })
    this.ver_form_empleado = true
  }


}
