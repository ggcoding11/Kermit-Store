package com.example.kermit_store.service;
import com.example.kermit_store.dto.ProductCreateDTO;
import com.example.kermit_store.dto.ProductReponseDTO;
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

    public List<ProductReponseDTO> listarTodos() {
        List<Product> products = repository.findAll();

        return products.stream().map(product -> toDto(product)).toList();
    }

    public ProductReponseDTO listarPorId(Long id){
        Product product = repository.findById(id).get();
        return toDto(product);
    }

    public ProductReponseDTO criar (ProductCreateDTO dto) {
        Product product = toEntity(dto);

        Product saved = repository.save(product);

        return toDto(saved);
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

    public ProductReponseDTO toDto(Product product) {
        return new ProductReponseDTO(product.getId(), product.getName(), product.getBrand());
    }

    public Product toEntity(ProductCreateDTO dto) {
        Product product = new Product();

        product.setName(dto.getName());
        product.setCategory(dto.getCategory());
        product.setPrice(dto.getPrice());
        product.setQuantity(dto.getQuantity());
        product.setCreationDate(dto.getCreationDate());

        return product;
    }
}