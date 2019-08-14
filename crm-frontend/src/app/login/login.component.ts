import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
  // dependency injection
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = true
      this.router.navigate(['welcome', this.username]) 
    } else {
      this.invalidLogin = false
    }
  }

}
