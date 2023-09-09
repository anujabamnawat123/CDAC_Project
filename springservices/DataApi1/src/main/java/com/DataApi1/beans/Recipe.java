package com.DataApi1.beans;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("recipes")
public class Recipe {
	
	private String _id;
	
	private String name;
	
	private List<String> ingredients;
	
	private int prepTimeInMinutes;

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getIngredients() {
		return ingredients;
	}

	public void setIngredients(List<String> ingredients) {
		this.ingredients = ingredients;
	}

	public int getPrepTimeInMinutes() {
		return prepTimeInMinutes;
	}

	public void setPrepTimeInMinutes(int prepTimeInMinutes) {
		this.prepTimeInMinutes = prepTimeInMinutes;
	}

	@Override
	public String toString() {
		return "Recipes [_id=" + _id + ", name=" + name + ", ingredients=" + ingredients + ", prepTimeInMinutes="
				+ prepTimeInMinutes + "]";
	}
	
	
	
}
