package com.houarizegai.crm.restfulwebservices.controller;

import com.houarizegai.crm.restfulwebservices.model.Customer;
import com.houarizegai.crm.restfulwebservices.repository.CustomerRepository;
import com.houarizegai.crm.restfulwebservices.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/users/{username}/customers")
    public List<Customer> getAllCustomers(@PathVariable String username) {
        return customerRepository.findAll();
        // return customerService.findAll();
    }

    @GetMapping("/users/{username}/customers/{id}")
    public Customer getCustomer(@PathVariable String username, @PathVariable long id) {
        return customerRepository.findById(id).get();
        // return customerService.findById(id);
    }

    @PutMapping("/users/{username}/customers")
    public ResponseEntity<Customer> updateCustomer(@PathVariable String username, @RequestBody Customer customer) {
        // Customer updatedCustomer = customerService.save(customer);
        Customer updatedCustomer = customerRepository.save(customer);
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/customers")
    public ResponseEntity<Void> createCustomer(@PathVariable String username, @RequestBody Customer customer) {
        // Customer createdCustomer = customerService.save(customer);
        Customer createdCustomer = customerRepository.save(customer);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdCustomer.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/users/{username}/customers/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable String username, @PathVariable long id) {
        // Customer customer = customerService.deleteById(id);

        // get customer wanna delete it
        customerRepository.deleteById(id);

        return ResponseEntity.noContent().build();
        //return ResponseEntity.notFound().build();
    }
}
