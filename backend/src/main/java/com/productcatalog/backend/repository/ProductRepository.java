package com.stockmaster.backend.repository;

import com.stockmaster.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// Ini magic-nya Spring Data JPA. Otomatis bikinin query SQL.
public interface ProductRepository extends JpaRepository<Product, Long> {
}