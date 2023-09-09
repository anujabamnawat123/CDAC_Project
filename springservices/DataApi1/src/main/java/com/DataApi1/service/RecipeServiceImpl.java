package com.DataApi1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DataApi1.beans.Recipe;
import com.DataApi1.dao.RecipeRepository;

@Service
public class RecipeServiceImpl implements RecipeService{

	@Autowired
	RecipeRepository tRepo;

	@Override
	public List<Recipe> getAll() {
		return tRepo.findAll();
	}

	@Override
	public Recipe getByName(String name) {
		return tRepo.getByName(name);
	}
	
}
