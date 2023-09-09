package com.DataApi1.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.DataApi1.beans.Recipe;
import com.DataApi1.beans.TestBean;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String>{

	@Query("{name:?0}")
	Recipe getByName(String name);
	
	
}
