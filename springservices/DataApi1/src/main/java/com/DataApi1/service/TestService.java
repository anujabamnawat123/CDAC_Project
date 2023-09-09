package com.DataApi1.service;

import java.util.List;

import com.DataApi1.beans.TestBean;

public interface TestService {

	List<TestBean> getAll();
	
	TestBean getByName(String name);
}
