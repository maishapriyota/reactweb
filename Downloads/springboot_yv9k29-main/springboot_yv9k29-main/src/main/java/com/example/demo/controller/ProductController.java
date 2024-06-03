package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found with id: " + id));
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        // Check if user is authenticated
        if (isAuthenticated()) {
            return productRepository.save(product);
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not authenticated");
        }
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        // Check if user is authenticated
        if (isAuthenticated()) {
            // Check if product exists
            if (productRepository.existsById(id)) {
                product.setId(id);
                return productRepository.save(product);
            } else {
                // Product not found
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found with id: " + id);
            }
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not authenticated");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        // Check if user is authenticated
        if (isAuthenticated()) {
            // Check if product exists
            if (productRepository.existsById(id)) {
                productRepository.deleteById(id);
            } else {
                // Product not found
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found with id: " + id);
            }
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not authenticated");
        }
    }

    // Helper method to check if user is authenticated
    private boolean isAuthenticated() {
        // Check authentication logic here, such as checking if user is logged in or has valid session/token
        // Return true if authenticated, false otherwise
        return true; // Placeholder implementation for demonstration
    }
}
