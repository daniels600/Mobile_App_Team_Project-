import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: "string";
  password: "string";
  disabledbtn;
  constructor() { }

  ngOnInit() {
  }

  reset_password(){

  }
}