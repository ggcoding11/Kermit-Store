package com.example.kermit_store.controller;

import com.example.kermit_store.model.Product;
import com.example.kermit_store.service.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<List<Product>> listarTodos() {
        List<Product> request = service.listarTodos();

        return ResponseEntity.status(HttpStatus.OK).body(request);
    }

    @PostMapping
    public ResponseEntity<Product> criar(@RequestBody Product product) {
        Product request = service.criar(product);

        return ResponseEntity.status(HttpStatus.CREATED).body(request);
    }
}
