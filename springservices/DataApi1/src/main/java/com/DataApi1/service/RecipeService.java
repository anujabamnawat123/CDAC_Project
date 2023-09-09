package com.DataApi1.service;

import java.util.List;

import com.DataApi1.beans.Recipe;

public interface RecipeService {

	List<Recipe> getAll();
	
	Recipe getByName(String name);
}
