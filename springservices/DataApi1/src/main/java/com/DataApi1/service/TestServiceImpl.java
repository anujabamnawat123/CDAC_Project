package com.DataApi1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DataApi1.beans.TestBean;
import com.DataApi1.dao.TestRepository;

@Service
public class TestServiceImpl implements TestService{

	@Autowired
	TestRepository tRepo;

	@Override
	public List<TestBean> getAll() {
		return tRepo.findAll();
	}

	@Override
	public TestBean getByName(String name) {
		return tRepo.getByName(name);
	}
	
}
