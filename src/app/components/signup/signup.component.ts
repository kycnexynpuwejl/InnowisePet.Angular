import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

  signupResponse: any

  signupForm = new FormGroup( {
    username: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.signup(this.signupForm.value.username ? this.signupForm.value.username : '',
      this.signupForm.value.password ? this.signupForm.value.password : '').subscribe(response =>{
        this.signupResponse = response
      }
    )

    console.log(this.signupResponse)
  }
}
