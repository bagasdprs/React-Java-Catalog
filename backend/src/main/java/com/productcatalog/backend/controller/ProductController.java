package com.stockmaster.backend.controller;

import com.stockmaster.backend.entity.Product;
import com.stockmaster.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // PENTING! Biar React boleh akses
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // 1. GET ALL (Ambil semua data)
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // 2. CREATE (Tambah data baru)
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
}