package com.ecommerce.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.backend.entity.Category;

@Repository
public interface Categoryrepository extends JpaRepository<Category, Integer> {
	Category findByCategoryName(String categoryName);
}
