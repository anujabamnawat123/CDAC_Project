package com.DataApi1.beans;

public class Business {
	private String businessName;
	private String businessLocation;
	
	public String getBusinessName() {
		return businessName;
	}
	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}
	public String getBusinessLocation() {
		return businessLocation;
	}
	public void setBusinessLocation(String businessLocation) {
		this.businessLocation = businessLocation;
	}
	@Override
	public String toString() {
		return "Business [businessName=" + businessName + ", businessLocation=" + businessLocation + "]";
	}
	
	
}
