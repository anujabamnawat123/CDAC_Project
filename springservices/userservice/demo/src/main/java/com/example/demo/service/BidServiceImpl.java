package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Bid;
import com.example.demo.dao.BidDao;

@Service
public class BidServiceImpl implements BidService{

	@Autowired
	BidDao bdao;
	
	@Override
	public List<Bid> showAllBids() {
		return bdao.showAllBids();
	}

	@Override
	public List<Bid> showAllBidsForUser(String username) {
		return bdao.showAllBidsForUser(username);
	}

	@Override
	public List<Bid> showBidsOnTender(String referenceNo) {
		return bdao.showBidsOnTender(referenceNo);
	}
	
	public Bid addBid(Bid bid) {
		bdao.deleteOldBid(bid.getBidderName());
		return bdao.save(bid);
	}

	@Override
	public void deleteIfTenderRemoved(String referenceno) {
		bdao.deleteIfTenderRemoved(referenceno);
	}

}
