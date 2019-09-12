package com.houarizegai.crm.restfulwebservices.model;

public class BasicAuthentication {
    private String message;

    public BasicAuthentication(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "BasicAuthentication{" +
                "message='" + message + '\'' +
                '}';
    }
}
