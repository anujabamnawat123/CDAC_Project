package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.example.demo.beans.Bid;

public interface BidService {
	
	List<Bid> showAllBids();
	
	List<Bid> showAllBidsForUser(String username);
	
	List<Bid> showBidsOnTender(String referenceNo);
	
	Bid addBid(Bid bid);

	void deleteIfTenderRemoved(String referenceno);
}
