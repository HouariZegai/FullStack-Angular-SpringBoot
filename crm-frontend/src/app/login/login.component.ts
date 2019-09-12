import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  form: FormGroup;
  
  // like this: Angular.giveMeRouter
  // dependency injection
  constructor(
    private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private toastr: ToastrService
    ) { 
      this.form = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }    

  ngOnInit() {
  }

  handleLogin(form: NgForm) {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]) 
    } else {
      this.invalidLogin = true;
      this.toastr.error('Error', this.errorMessage, {timeOut: 3000});
    }
  }
  
  handleBasicAuthLogin(form: NgForm) {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]) 
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
        this.toastr.error('Error', this.errorMessage, {timeOut: 3000});
      }
    );
  }

  handleJWTAuthLogin(form: NgForm) {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]) 
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
        this.toastr.error('Error', this.errorMessage, {timeOut: 3000});
      }
    );
  }
}

