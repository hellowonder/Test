package com.ecommerce.backend.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.Repository.Categoryrepository;
import com.ecommerce.backend.entity.Category;

@Service
@Transactional
public class CategoryService {
	
	@Autowired
	Categoryrepository categoryRepo;
	
	public void createCategory(Category category) {
		categoryRepo.save(category);
	}
	
	public List<Category> listCategory() {
		return categoryRepo.findAll();
	}
	
	public void editCategory(int categoryId, Category updateCategory) {
		Category category = categoryRepo.getById(categoryId);
		category.setCategoryName(updateCategory.getCategoryName());
		category.setDescription(updateCategory.getDescription());
		category.setImageUrl(updateCategory.getImageUrl());
		categoryRepo.save(category);
	}
	
	public boolean findById(int categoryId) {
		return categoryRepo.findById(categoryId).isPresent();
	}

	public Optional<Category> getCategoryById(Integer id) {
		// TODO Auto-generated method stub
		return categoryRepo.findById(id);
	}

}
