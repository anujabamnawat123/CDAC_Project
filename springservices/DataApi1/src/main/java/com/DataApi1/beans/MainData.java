package com.DataApi1.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("DataSet")
public class MainData {
	
	@Id
	private String _id;
	private OrganizationDetails organizationDetails;
	private Business business;
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public OrganizationDetails getOrganizationDetails() {
		return organizationDetails;
	}
	public void setOrganizationDetails(OrganizationDetails organizationDetails) {
		this.organizationDetails = organizationDetails;
	}
	public Business getBusiness() {
		return business;
	}
	public void setBusiness(Business business) {
		this.business = business;
	}
	
	@Override
	public String toString() {
		return "MainData [_id=" + _id + ", organizationDetails=" + organizationDetails + ", business=" + business + "]";
	}
	
	
	
}
