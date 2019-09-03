import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../service/data/customer-data.service';

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
  
  customers: Customer[]
  message: string

  constructor(private service: CustomerDataService) { }

  ngOnInit() {
    this.retrieveAllCustomers();
  }

  retrieveAllCustomers() {
    this.service.retrieveAllCustomers("houarizegai").subscribe(
      response => {
        console.log(response);
        this.customers = response;
      }
    );
  }

  deleteCustomer(id) {
      // console.log(`Delete customer ${id}`);
      this.service.deleteCustomer("houarizegai", id).subscribe(
        response => {
          console.log(response);
          this.message = `The customer ${id} has been deleted!`
        }
      );

      this.retrieveAllCustomers(); // refresh customers
  }

}
