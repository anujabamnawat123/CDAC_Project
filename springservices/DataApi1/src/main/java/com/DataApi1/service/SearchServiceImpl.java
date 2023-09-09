package com.DataApi1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.DataApi1.beans.MainData;
import com.DataApi1.dao.MainDataRepository;

@Service
public class SearchServiceImpl implements SearchService{

	@Autowired
	MainDataRepository mdr;
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	@Override
	public List<MainData> getByTenderName(String tenderName) {
		return mdr.getByTenderName(tenderName);
	}

	@Override
	public List<MainData> getByTenderLocation(String tenderLocation) {
		return mdr.getByTenderLocation(tenderLocation);
	}

	@Override
	public List<MainData> getByTenderCategory(String tenderCategory) {
		return mdr.getByTenderCategory(tenderCategory);
	}
	
	@Override
	public List<MainData> advancedSearch(String tenderLocation, String tenderCategory, long lprice, long hprice){
		return mdr.advancedSearch(tenderLocation, tenderCategory, lprice, hprice);
	}
	
	public List<MainData> advancedSearch1(String tenderLocation, String tenderCategory, long lprice, long hprice){
		Query query = new Query();
		if(tenderLocation!=null && tenderLocation!="") {
			query.addCriteria(Criteria.where("organizationDetails.tenderLocation").is(tenderLocation));
		}
		if(tenderCategory!=null && tenderCategory!="") {
			query.addCriteria(Criteria.where("organizationDetails.tenderCategory").is(tenderCategory));
		}
		if(hprice!=0 && lprice!=0) {
			System.out.println(hprice);
			query.addCriteria(Criteria.where("organizationDetails.tenderAmount").lte(hprice).gte(lprice));
		}
		if(lprice!=0 && hprice==0) {
			query.addCriteria(Criteria.where("organizationDetails.tenderAmount").gte(lprice));
		}
		if(lprice==0 && hprice!=0) {
			query.addCriteria(Criteria.where("organizationDetails.tenderAmount").lte(hprice));
		}
		return mongoTemplate.find(query,MainData.class);
	}

	@Override
	public List<MainData> getAllData() {
		return mdr.findAll();
	}
	
}
