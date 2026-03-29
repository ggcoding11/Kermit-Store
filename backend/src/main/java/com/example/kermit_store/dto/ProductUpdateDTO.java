package com.example.kermit_store.dto;
import com.example.kermit_store.enums.CategoryEnum;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class ProductUpdateDTO {
    private String name;
    private String brand;
    private Double price;
    private CategoryEnum category;
    private String imageName;
    private LocalDate creationDate;
    private Integer quantity;
    private String description;
}
