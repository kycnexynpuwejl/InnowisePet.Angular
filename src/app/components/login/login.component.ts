import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  tokens: any

  @Output() statusHandler = new EventEmitter<any>();

  loginForm = new FormGroup( {
    username: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  constructor(private authService: AuthService,
              private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.loginForm.value.username ? this.loginForm.value.username : '',
     this.loginForm.value.password ? this.loginForm.value.password : '').subscribe(response =>{
        this.tokens = response
        if(this.tokens){
          localStorage.setItem('access_token', this.tokens.accessToken)
          localStorage.setItem('refresh_token', this.tokens.refreshToken)
          this.statusHandler.emit('success')
          console.log('EMIT POLETEL')
        }
        else {
          this.statusHandler.emit('unsuccess')
        }
      }
    )
  }

  ngOnDestroy(): void {
  }
}

