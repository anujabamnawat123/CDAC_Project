package com.DataApi1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DataApi1.beans.Recipe;
import com.DataApi1.beans.TestBean;
import com.DataApi1.service.RecipeService;
import com.DataApi1.service.TestService;

@RestController
public class TestController {
	
	@Autowired
	TestService tService;
	
	@Autowired
	RecipeService rService;
	
	@GetMapping("/all")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok(tService.getAll());
	}
	
	@PostMapping("/getByName")
	public ResponseEntity<?> getByName(@RequestBody TestBean bean){
		return ResponseEntity.ok(tService.getByName(bean.getName()));
	}
	
	@PostMapping("/allr")
	public ResponseEntity<?> getAllR(){
		return ResponseEntity.ok(rService.getAll());
	}
	
	@PostMapping("/getByRName")
	public ResponseEntity<?> getByRName(@RequestBody Recipe bean){
		return ResponseEntity.ok(rService.getByName(bean.getName()));
	}
}
