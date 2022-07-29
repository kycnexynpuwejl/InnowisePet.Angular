import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  login() {
    this.dialog.open(LoginComponent)
  }

  signup() {
    this.dialog.open(SignupComponent)
  }
}
