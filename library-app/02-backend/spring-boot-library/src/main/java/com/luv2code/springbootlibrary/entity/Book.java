package com.luv2code.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "book")
public class Book {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String description;
    private int copies;

    @Column(name = "copies_available")
    private int copiesAvailable;

    private String category;
    private String image;
}
