package com.example.kermit_store.dto;

import com.example.kermit_store.enums.CategoryEnum;
import jakarta.validation.constraints.*;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class ProductCreateDTO {
    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Brand is required")
    private String brand;

    @NotNull(message = "Price is required")
    private Double price;

    @NotNull(message = "Category is required")
    private CategoryEnum category;

    @NotBlank(message = "Image name is required")
    private String imageName;

    @NotNull(message = "Creation date is required")
    private LocalDate creationDate;

    @NotNull(message = "Quantity is required")
    @Positive(message = "Quantity cannot be less than 0")
    private Integer quantity;

    @NotBlank(message = "Description is required")
    private String description;
}
