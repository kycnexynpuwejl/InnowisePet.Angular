import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup( {
    username: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.loginForm.value.username ? this.loginForm.value.username : '',
     this.loginForm.value.password ? this.loginForm.value.password : '')
  }
}
