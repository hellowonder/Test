package com.ecommerce.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.dto.ResponseDto;
import com.ecommerce.backend.dto.SignInDto;
import com.ecommerce.backend.dto.SignInReponseDto;
import com.ecommerce.backend.dto.SignupDto;
import com.ecommerce.backend.service.UserService;

@RequestMapping("user")
@RestController
@CrossOrigin
public class UserController {
	@Autowired
    UserService userService;
	
	 @PostMapping("/signup")
	 public ResponseDto signup(@RequestBody SignupDto signupDto) {
	        return userService.signUp(signupDto);
	 }
	 
	 @PostMapping("/signin")
	 public SignInReponseDto signIn(@RequestBody SignInDto signInDto) {
	        return userService.signIn(signInDto);
	 }
}
