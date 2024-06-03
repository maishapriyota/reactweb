package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "customer_orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String orderDetails;

    @ManyToOne
    private User user;

    @ManyToOne
    private Product product;

    private boolean deleteOrder;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(String orderDetails) {
        this.orderDetails = orderDetails;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public boolean isDeleteOrder() {
        return deleteOrder;
    }

    public void setDeleteOrder(boolean deleteOrder) {
        this.deleteOrder = deleteOrder;
    }
}
