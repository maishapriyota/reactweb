package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home"; // This should render the home.html template
    }

    @GetMapping("/home")
    public String main() {
        return "main"; // This should render the main.html template
    }
}
