package com.ecommerce.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.common.ApiResponse;
import com.ecommerce.backend.entity.Address;
import com.ecommerce.backend.entity.Product;
import com.ecommerce.backend.entity.User;
import com.ecommerce.backend.service.AddressService;
import com.ecommerce.backend.service.AuthenticationService;

@RestController
@RequestMapping("/address")
@CrossOrigin
public class AddressController {

	@Autowired
	AddressService addressservice;
	
    @Autowired
    AuthenticationService authenticationService;
    
    @PostMapping("/add")
    public ResponseEntity<ApiResponse>addAddress(@RequestBody Address address,
                                                     @RequestParam("token") String token){	
    	 User user = authenticationService.getUser(token);
    	 
    	 //addressservice.createAddress(address);
    	 
 		 addressservice.createAddress(address, user);
    	 
    	 ApiResponse apiResponse = new ApiResponse(true, "Address Added  Sucessfully");
         return  new ResponseEntity<>(apiResponse, HttpStatus.CREATED);
    }
}
