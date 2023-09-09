package com.example.demo.beans;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class UserTenderInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String referenceno;
	private String tenderName;
	private String tenderLocation;
	private Date postDate;
	private Date endDate;
	private long tenderAmount;
	@ManyToOne
	private Users user;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getReferenceno() {
		return referenceno;
	}
	public void setReferenceno(String referenceno) {
		this.referenceno = referenceno;
	}
	public String getTenderName() {
		return tenderName;
	}
	public void setTenderName(String tenderName) {
		this.tenderName = tenderName;
	}
	public String getTenderLocation() {
		return tenderLocation;
	}
	public void setTenderLocation(String tenderLocation) {
		this.tenderLocation = tenderLocation;
	}
	public Date getPostDate() {
		return postDate;
	}
	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public long getTenderAmount() {
		return tenderAmount;
	}
	public void setTenderAmount(long tenderAmount) {
		this.tenderAmount = tenderAmount;
	}
	@Override
	public String toString() {
		return "UserTenderInfo [id=" + id + ", username=" + username + ", referenceNo=" + referenceno + ", tenderName="
				+ tenderName + ", tenderLocation=" + tenderLocation + ", postDate=" + postDate + ", endDate=" + endDate
				+ ", tenderAmount=" + tenderAmount + ", user=" + user + "]";
	}
	
	
}
