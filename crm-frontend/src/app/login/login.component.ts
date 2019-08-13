import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'houarizegai'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    this.invalidLogin = !(this.username === "houarizegai" && this.password === "0000")
  }

}
