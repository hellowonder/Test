package com.ecommerce.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.common.ApiResponse;
import com.ecommerce.backend.entity.Category;
import com.ecommerce.backend.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	@PostMapping("/create")
	public ResponseEntity<ApiResponse> createCategory(@RequestBody Category category) {
		categoryService.createCategory(category);
		return new ResponseEntity<ApiResponse>(new ApiResponse(true,"create a new category"),HttpStatus.CREATED);
	}
	
	@GetMapping("/list")
	public  List<Category> listCategory() {
		return categoryService.listCategory();
	}
	
	@GetMapping("/getcategory/{id}")
	public Optional<Category> getCategory(@PathVariable("id") Integer id) {
		return categoryService.getCategoryById(id);
	}
	
	
	@PostMapping("/update/{categoryId}")
	public ResponseEntity<ApiResponse> updateCategory(@PathVariable("categoryId") int categoryId,@RequestBody Category category) {
		//System.out.println("category id" +categoryId);
		if(!categoryService.findById(categoryId)) {
			return new ResponseEntity<ApiResponse>(new ApiResponse(false,"Category doesn't exists"),HttpStatus.NOT_FOUND);
		}
		categoryService.editCategory(categoryId,category);
		return new ResponseEntity<ApiResponse>(new ApiResponse(true,"Category has been updated"),HttpStatus.OK);
	}
	
}
