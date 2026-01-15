package com.stockmaster.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String sku;
    private String category;
    private Double price;
    private Integer stock;

    // (In Stock, Low Stock, Out of Stock)
    private String stockStatus;

    // URL Gambar
    private String image;
}