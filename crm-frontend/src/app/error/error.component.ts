import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An error occured! contact support at: support@houarizegai.net'

  constructor() { }

  ngOnInit() {
  }

}
