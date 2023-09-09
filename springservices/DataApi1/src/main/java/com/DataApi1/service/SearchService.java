package com.DataApi1.service;

import java.util.List;

import com.DataApi1.beans.MainData;

public interface SearchService {
	
	List<MainData> getByTenderName(String tenderName);
	
	List<MainData> getByTenderLocation(String tenderLocation);

	List<MainData> getByTenderCategory(String tenderCategory);
	
	List<MainData> advancedSearch(String tenderLocation, String tenderCategory, long lprice, long hprice);
	
	List<MainData> getAllData();

	List<MainData>advancedSearch1(String tenderLocation, String tenderCategory, long getlPrice, long gethPrice);
	
}
