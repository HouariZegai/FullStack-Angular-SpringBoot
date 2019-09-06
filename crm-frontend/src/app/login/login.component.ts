import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

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
  form: FormGroup;
  // like this: Angular.giveMeRouter
  // dependency injection
  constructor(
    private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
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
      this.toastr.error('Error','Operation failed', {
        timeOut: 3000
      });
    }
  }

}
