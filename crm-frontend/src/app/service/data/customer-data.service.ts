import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/customers/customers.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCustomers(username) {
    return this.http.get<Customer[]>(`http://localhost:8080/users/${username}/customers`);
  }

  retrieveCustomer(username, id) {
    return this.http.get<Customer>(`http://localhost:8080/users/${username}/customers/${id}`);
  }

  updateCustomer(username: string, customer: Customer) {
    return this.http.put(`http://localhost:8080/users/${username}/customers`, customer);
  }

  deleteCustomer(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/customers/${id}`);
  }

}
