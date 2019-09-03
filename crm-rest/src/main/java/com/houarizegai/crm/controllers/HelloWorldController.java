package com.houarizegai.crm.controllers;

import com.houarizegai.crm.model.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200") // allow request from the url specified
@RestController
public class HelloWorldController {

    @GetMapping("/hello-world-bean")
    public HelloWorldBean sayHelloWorldBean() {
        return new HelloWorldBean("Hello World!");
    }

}
