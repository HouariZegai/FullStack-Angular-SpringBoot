import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = 'houarizegai'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  // like this: Angular.giveMeRouter
  // dependency injection
  constructor(
    private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]) 
    } else {
      this.invalidLogin = true;
      this.toastr.error('Error','Operation failed', {
        timeOut: 3000
      });
    }
  }

}
