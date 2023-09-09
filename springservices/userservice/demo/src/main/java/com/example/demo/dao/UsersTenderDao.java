package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.beans.UserTenderInfo;

@Repository
public interface UsersTenderDao extends JpaRepository<UserTenderInfo,Integer>{
	
	@Query(value="select u from UserTenderInfo u where username=?1")
	List<UserTenderInfo> getTenderInfoForUser(String username);
	
	
	@Transactional
	@Modifying
	@Query(value="delete from user_tender_info where referenceno=?1",nativeQuery = true)
	void deleteTenderInfo(String referenceno);
	
}
