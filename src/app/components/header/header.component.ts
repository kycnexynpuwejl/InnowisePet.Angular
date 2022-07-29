import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @ViewChild('loginModal') loginModal: ElementRef<HTMLElement>;

  dialogRef: any;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  login() {
    this.dialog.open(LoginComponent).componentInstance.statusHandler.subscribe((x: any) => this.loginEventHandler(x))
  }

  signup() {
    this.dialog.open(SignupComponent)
  }

  loginEventHandler($event: any) {
    if($event == 'success') {
      this.dialog.closeAll()
    }
    else{console.log('IDI NAXYI')}
  }
}
