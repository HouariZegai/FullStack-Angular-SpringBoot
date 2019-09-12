import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from 'src/app/customers/customers.component';
import { API_URL } from 'src/app/app.constants';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCustomers(username: string) {
    return this.http.get<Customer[]>(`${API_URL}/users/${username}/customers`);
  }

  retrieveCustomer(username: string, id: number) {
    return this.http.get<Customer>(`${API_URL}/users/${username}/customers/${id}`);
  }

  addCustomer(username: string, customer: Customer) {
    return this.http.post(`${API_URL}/users/${username}/customers`, customer);
  }

  updateCustomer(username: string, customer: Customer) {
    return this.http.put(`${API_URL}/users/${username}/customers`, customer);
  }

  deleteCustomer(username: string, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/customers/${id}`);
  }

}
