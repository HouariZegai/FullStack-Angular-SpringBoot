import { Component, OnInit } from '@angular/core';

export class Customer {
  constructor(
    public id: number,
    public name: string,
    public birthDate: Date,
    public email: string) {

  }
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = [
    new Customer(1, 'Houari', new Date(), 'admin@houarizegai.me'),
    new Customer(2, 'Fatima', new Date(), 'fatima@houarizegai.me'),
    new Customer(3, 'Fares', new Date(), 'fares@houarizegai.me'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
