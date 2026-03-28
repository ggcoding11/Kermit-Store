package com.example.kermit_store.controller;

import com.example.kermit_store.dto.ProductCreateDTO;
import com.example.kermit_store.dto.ProductReponseDTO;
import com.example.kermit_store.model.Product;
import com.example.kermit_store.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<List<ProductReponseDTO>> listarTodos() {
        List<ProductReponseDTO> request = service.listarTodos();

        return ResponseEntity.status(HttpStatus.OK).body(request);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductReponseDTO> listarPorId(@PathVariable Long id) {
        ProductReponseDTO request = service.listarPorId(id);

        return ResponseEntity.status(HttpStatus.OK).body(request);
    }

    @PostMapping
    public ResponseEntity<ProductReponseDTO> criar(@RequestBody ProductCreateDTO product) {
        ProductReponseDTO request = service.criar(product);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(product.getId()).toUri();

        return ResponseEntity.created(uri).body(request);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> atualizar(@PathVariable Long id, @RequestBody Product product) {
        Product request = service.atualizar(id, product);

        return ResponseEntity.status(HttpStatus.OK).body(request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        service.deletar(id);

        return ResponseEntity.noContent().build();
    }
}
