import { Component, OnInit } from '@angular/core';

// decorator (annotation in java)
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Welcome message'

  constructor() { }

  ngOnInit() {
    // compilation error: this.message = 10
    console.log(this.message)
  }

}
