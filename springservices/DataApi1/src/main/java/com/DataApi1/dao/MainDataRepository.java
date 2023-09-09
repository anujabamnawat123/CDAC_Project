package com.DataApi1.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.DataApi1.beans.MainData;

public interface MainDataRepository extends MongoRepository<MainData,String>{
	
	@Query("{'OrganizationDetails.tenderName':?0}")
	List<MainData> getByTenderName(String tenderName);
	
	@Query("{'OrganizationDetails.tenderLocation':'?0'}")
	List<MainData> getByTenderLocation(String tenderName);

	@Query("{'OrganizationDetails.tenderCategory':?0}")
	List<MainData> getByTenderCategory(String tenderCategory);
	
	@Query("{$and:[{'organizationDetails.tenderLocation':?0},{'organizationDetails.tenderCategory':?1}]}")
	List<MainData> advancedSearch(String tenderLocation, String tenderCategory, long lprice, long hprice);
}
