import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../providers/api.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_login = this.fb.group({
    username:[''],
    password:['']
  })

  constructor(private fb:FormBuilder, private api:ApiService,private messageService: MessageService,private router:Router) { }

  ngOnInit(): void {
  }

  login() {

    this.api.get_token(this.form_login.value)
      .subscribe(
        data=>{
          if(data!=undefined){
            this.api.usuario = data
            this.api.add_token(this.api.usuario.token)
            this.router.navigate(['/home'])
            this.messageService.add({severity:'success', summary:'Login', detail:'Usuario logueado con exito!.'});
          }else {
            this.api.usuario = ''
            this.router.navigate(['/login'])
            this.messageService.add({severity:'error', summary:'Login', detail:'Su nombre de usuario o su contaseña no son correctas.'});
          }
        }
      )

  }
}
