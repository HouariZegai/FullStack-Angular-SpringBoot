import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // like this: Angular.giveMeRouter
  // dependency injection (inject router)
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    this.invalidLogin = !(this.username === "houarizegai" && this.password === "0000")
    if(!this.invalidLogin) {
      this.router.navigate(['welcome', this.username])
    }
  }

}
