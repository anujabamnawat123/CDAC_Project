package com.example.demo.service;

import java.util.List;

import com.example.demo.beans.UserTenderInfo;

public interface UserTenderService {
	List<UserTenderInfo> getTenderInfoForUser(String username);

	UserTenderInfo addTenderForUser(UserTenderInfo info);

	void deleteTenderInfo(String referenceno);


//	UserTenderInfo updateTender(String referenceNo, UserTenderInfo users);
//
//	UserTenderInfo deleteTender(String referenceNo);
}
