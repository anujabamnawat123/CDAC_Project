package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.UserTenderInfo;
import com.example.demo.beans.Users;
import com.example.demo.service.UserTenderService;
import com.example.demo.service.UsersService;

@CrossOrigin(origins="*")
@RestController
public class UsersController {
	
	@Autowired
	UsersService usersService;
	
	@Autowired
	UserTenderService uts;
	
	@GetMapping("/all")
	public ResponseEntity<List<Users>> getAllUsers(){
		System.out.println(usersService.getAllUsers());
		return ResponseEntity.ok(usersService.getAllUsers());
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Users users){
		return ResponseEntity.ok(usersService.Login(users.getUsername(), users.getPassword()));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody Users users){
		return ResponseEntity.ok(usersService.register(users));
	}
	
	@PostMapping("/getTendersForUser")
	public ResponseEntity<?> getTendersForUser(@RequestBody Users users){
		return ResponseEntity.ok(uts.getTenderInfoForUser(users.getUsername()));
	}
	
	@PostMapping("/addTendersForUser")
	public ResponseEntity<UserTenderInfo> addTendersForUser(@RequestBody UserTenderInfo info){
		System.out.println(info);
		return ResponseEntity.ok(uts.addTenderForUser(info));
	}
	
	@PostMapping("/getUserFromUsername")
	public ResponseEntity<?> getUserFromUsername(@RequestBody Users info){
		return ResponseEntity.ok(usersService.getUserFromUsername(info.getUsername()));
	}
	
	@PostMapping("/getUserFromEmail")
	public ResponseEntity<?> getUserFromEmail(@RequestBody Users info){
		return ResponseEntity.ok(usersService.getUserFromEmail(info.getEmail()));
	}
	
	@PostMapping("/updatePasswordForUsername")
	public ResponseEntity<?> updatePasswordForUsername(@RequestBody Users info){
		usersService.updatePasswordForUsername(info.getUsername(),info.getPassword());
		return ResponseEntity.ok("ok");
	}
	
	@PostMapping("/updatePasswordForEmail")
	public ResponseEntity<?> updatePasswordForEmail(@RequestBody Users info){
		usersService.updatePasswordForEmail(info.getEmail(),info.getPassword());
		return ResponseEntity.ok("ok");
	}
	
//	@PutMapping("/updateTendersForUser/{referenceNo}")
//	public ResponseEntity<?> updateTendersForUser(@RequestBody UserTenderInfo users,@RequestParam String referenceNo){
//		return ResponseEntity.ok(uts.updateTender(referenceNo,users));
//	}
//	
	@DeleteMapping("/deleteTendersForUser")
	public ResponseEntity<String> deleteTendersForUser(@RequestParam String referenceno){
		uts.deleteTenderInfo(referenceno);
		return ResponseEntity.ok(referenceno);
	}
}
