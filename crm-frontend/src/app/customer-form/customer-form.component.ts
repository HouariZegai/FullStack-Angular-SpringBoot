import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customers.component';
import { CustomerDataService } from '../service/data/customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer
  id: number

  constructor(private service: CustomerDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.customer = new Customer(this.id, '', new Date(), '');
    this.service.retrieveCustomer("houarizegai", this.id).subscribe(
      response => this.customer = response
    );
  }

  onSave() {
      this.service.updateCustomer("houarizegai", this.customer).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['customers']);
        }
      );
  }

}
