package com.example.kermit_store.service;
import com.example.kermit_store.model.Product;
import com.example.kermit_store.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    public List<Product> listarTodos() {
        return repository.findAll();
    }

    public Optional<Product> listarPorId(Long id){
        return repository.findById(id);
    }

    public Product criar (Product product) {
        return repository.save(product);
    }

    public void deletar (Long id) {
        repository.deleteById(id);
    }

    public Product atualizar (Long id, Product novo) {
        Product antigo = repository.findById(id).get();

        antigo.setBrand(novo.getBrand());
        antigo.setCategory(novo.getCategory());
        antigo.setName(novo.getName());
        antigo.setDescription(novo.getDescription());
        antigo.setPrice(novo.getPrice());
        antigo.setCreationDate(novo.getCreationDate());
        antigo.setQuantity(novo.getQuantity());
        antigo.setImageName(novo.getImageName());

        return repository.save(antigo);
    }
}