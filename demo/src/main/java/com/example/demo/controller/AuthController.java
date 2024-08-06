package com.example.demo.controller;

import com.example.demo.model.LoginCredentials;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginCredentials loginCredentials) {
        User user = userService.authenticate(loginCredentials);
        if (user != null) {
            if ("admin".equals(user.getRole())) {
                return ResponseEntity.ok("Redirect to Admin");
            } else if ("student".equals(user.getRole())) {
                return ResponseEntity.ok("Redirect to Student");
            }
        }
        return ResponseEntity.status(401).body("Invalid credentials. Please try again.");
    }
}