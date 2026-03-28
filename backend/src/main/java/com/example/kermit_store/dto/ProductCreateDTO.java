package com.example.kermit_store.dto;

import com.example.kermit_store.enums.CategoryEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class ProductCreateDTO {
    private String name;
    private String brand;
    private Double price;
    private CategoryEnum category;
    private String imageName;
    private LocalDate creationDate;
    private Integer quantity;
    private String description;
}
