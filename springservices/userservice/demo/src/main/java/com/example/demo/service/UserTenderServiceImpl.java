package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.UserTenderInfo;
import com.example.demo.dao.UsersTenderDao;

@Service
public class UserTenderServiceImpl implements UserTenderService{

	@Autowired
	UsersTenderDao utd;
	
	@Override
	public List<UserTenderInfo> getTenderInfoForUser(String username) {
		return utd.getTenderInfoForUser(username);
	}

	@Override
	public UserTenderInfo addTenderForUser(UserTenderInfo info) {
		return utd.save(info);
	}

	@Override
	public void deleteTenderInfo(String referenceno) {
		utd.deleteTenderInfo(referenceno);
		
	}

	

//	@Override
//	public UserTenderInfo updateTender(String referenceNo, UserTenderInfo users) {
//		return utd.;
//	}
//
//	@Override
//	public UserTenderInfo deleteTender(String referenceNo) {
//		return utd.deleteById(null);;
//	}

}
