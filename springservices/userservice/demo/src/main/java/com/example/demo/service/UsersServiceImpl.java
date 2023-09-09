package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.UserTenderInfo;
import com.example.demo.beans.Users;
import com.example.demo.dao.UsersDao;

@Service
public class UsersServiceImpl implements UsersService{

	@Autowired
	UsersDao usersDao;
	
	public List<Users> getAllUsers() {
		
		return usersDao.getAllUsers();
		
	}
	
	public Users Login(String username, String password) {
		return usersDao.Login(username, password);
		
	}

	@Override
	public Users register(Users users) {
		return usersDao.save(users);
	}

	@Override
	public List<Users> getUserFromUsername(String username) {
		return usersDao.getUserFromUsername(username);
	}

	@Override
	public List<Users> getUserFromEmail(String email) {
		return usersDao.getUserFromEmail(email);
	}

	@Override
	public void updatePasswordForUsername(String username, String password) {
		usersDao.updatePasswordForUsername(username,password);
	}

	@Override
	public void updatePasswordForEmail(String email, String password) {
		usersDao.updatePasswordForEmail(email,password);
	}
	
}
