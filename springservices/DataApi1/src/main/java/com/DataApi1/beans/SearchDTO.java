package com.DataApi1.beans;

public class SearchDTO {
	
	private String tenderName;
	private String tenderLocation;
	private String tenderCategory;
	private long lPrice;
	private long hPrice;
	
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
	public String getTenderCategory() {
		return tenderCategory;
	}
	public void setTenderCategory(String tenderCategory) {
		this.tenderCategory = tenderCategory;
	}
	public long getlPrice() {
		return lPrice;
	}
	public void setlPrice(long lPrice) {
		this.lPrice = lPrice;
	}
	public long gethPrice() {
		return hPrice;
	}
	public void sethPrice(long hPrice) {
		this.hPrice = hPrice;
	}
	@Override
	public String toString() {
		return "SearchDTO [tenderName=" + tenderName + ", tenderLocation=" + tenderLocation + ", tenderCategory="
				+ tenderCategory + ", lPrice=" + lPrice + ", hPrice=" + hPrice + "]";
	}
	
	
}
