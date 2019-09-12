package com.houarizegai.crm.restfulwebservices.service;

import com.houarizegai.crm.restfulwebservices.model.Customer;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Service
public class CustomerService {
    private static List<Customer> customers;
    private static long idCounter = 0;

    static {
        customers = new LinkedList<>(Arrays.asList(
                new Customer(++idCounter, "houari", new Date(), "admin@houarizegai.net"),
                new Customer(++idCounter, "omar", new Date(), "omar@houarizegai.net"),
                new Customer(++idCounter, "fatima", new Date(), "fatima@houarizegai.net")
        ));
    }

    public List<Customer> findAll() {
        return customers;
    }

    public Customer save(Customer customer) {
        if(customer.getId() < 1) {
            customer.setId(++idCounter);
            customers.add(customer);
        } else {
            deleteById(customer.getId());
            customers.add(customer);
        }

        return customer;
    }

    public Customer deleteById(long id) {
        Customer customer = findById(id);

        if(customer == null) return null;

        if(customers.remove(customer))
            return customer;
        return null;
    }

    public Customer findById(long id) {
        for(Customer customer : customers)
            if(customer.getId() == id)
                return customer;
        return null;
    }
}
