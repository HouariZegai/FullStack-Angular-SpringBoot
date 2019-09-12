package com.houarizegai.crm.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200") // allow request from the url specified
@RestController
public class HelloWorldController {

    @GetMapping("/hello-world-bean")
    public HelloWorldBean sayHelloWorldBean() {
        // throw new RuntimeException("Some error has happened, contact support at: support@houarizegai.net");
        return new HelloWorldBean("Hello World!");
    }

    @GetMapping("/hello-world/{name}")
    public HelloWorldBean sayHelloPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
