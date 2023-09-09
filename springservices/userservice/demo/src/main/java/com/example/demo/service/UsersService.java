package com.example.demo.service;

import java.util.List;

import com.example.demo.beans.UserTenderInfo;
import com.example.demo.beans.Users;

public interface UsersService {
	List<Users> getAllUsers();
	
	Users Login(String username, String password);

	Users register(Users users);

	List<Users> getUserFromUsername(String username);

	List<Users> getUserFromEmail(String email);

	void updatePasswordForUsername(String username, String password);

	void updatePasswordForEmail(String email, String password);
}
