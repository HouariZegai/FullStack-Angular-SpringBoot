package com.houarizegai.crm.controller;

import com.houarizegai.crm.model.Customer;
import com.houarizegai.crm.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/users/{username}/customers")
    public List<Customer> getAllCustomers(@PathVariable String username) {
        return customerService.findAll();
    }

    @DeleteMapping("/users/{username}/customers/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable String username, @PathVariable long id) {
        Customer customer = customerService.deleteById(id);

        if(customer != null)
            return ResponseEntity.noContent().build();
        return ResponseEntity.notFound().build();
    }
}
