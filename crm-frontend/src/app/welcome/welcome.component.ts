import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

// decorator (annotation in java)
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Welcome message'
  welcomeMessageFromService: string
  name = ''

  // adding Activate route for get parameter from the url
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    // compilation error: this.message = 10
    console.log(this.message)
    this.name = this.route.snapshot.params['name'] // get the parameter passing in the url
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithPathVariable() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    // console.log(error.error.message);
    // console.log(error);
    this.welcomeMessageFromService = error.error.message;
  }

}
