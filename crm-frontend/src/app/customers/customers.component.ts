import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../service/data/customer-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


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


  constructor(private service: CustomerDataService,
   private router: Router,
    private toastr: ToastrService) { }


  ngOnInit() {
    this.retrieveAllCustomers();
  }

  retrieveAllCustomers() {
    this.service.retrieveAllCustomers("houarizegai").subscribe(
      response => {
        // console.log(response);
        this.customers = response;
      }
    );
  }

  addCustomer() {
    this.router.navigate(['customers', -1]);
  }

  updateCustomer(id) {
    // console.log(`Update Customer ${id}`);
    this.router.navigate(['customers', id]);
  }

  deleteCustomer(id) {
      // console.log(`Delete customer ${id}`);
      this.service.deleteCustomer("houarizegai", id).subscribe(
        response => {
          // console.log(response);
          this.toastr.success('Success','The customer has been deleted!', {
            timeOut: 3000
          });         
          this.retrieveAllCustomers(); // refresh customers
        }
      );
  }

}
