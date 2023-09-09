package com.DataApi1.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.DataApi1.beans.TestBean;

@Repository
public interface TestRepository extends MongoRepository<TestBean, String>{

	@Query("{name:?0}")
	TestBean getByName(String name);
	
	//@Query("{}")
	//List<TestBean> getAll();
	
}
