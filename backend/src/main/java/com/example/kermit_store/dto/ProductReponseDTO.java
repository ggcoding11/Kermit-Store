package com.example.kermit_store.dto;

import com.example.kermit_store.enums.CategoryEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@Getter
@Setter
public class ProductReponseDTO {
    private Long id;

    private String name;
    private String brand;
}
