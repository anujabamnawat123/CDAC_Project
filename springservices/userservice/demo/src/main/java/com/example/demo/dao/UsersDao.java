package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.beans.Users;

@Repository
public interface UsersDao extends JpaRepository<Users,Integer>{

	@Query(value="select u from Users u")
	List<Users> getAllUsers();
	
	@Query(value="select u from Users u where u.username=?1 and password=?2")
	Users Login(String username, String password);

	@Query(value="select u from Users u where u.username=?1")
	List<Users> getUserFromUsername(String username);
	
	@Query(value="select u from Users u where u.email=?1")
	List<Users> getUserFromEmail(String email);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Users u SET password = ?2 WHERE username = ?1", nativeQuery = true)
	void updatePasswordForUsername(String username, String password);
	
	@Transactional
	@Modifying
	@Query(value="UPDATE Users u SET password=?2 where email=?1",nativeQuery = true)
	void updatePasswordForEmail(String email, String password);
	
}
