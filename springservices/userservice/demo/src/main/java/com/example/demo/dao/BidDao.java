package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.beans.Bid;

@Repository
public interface BidDao extends JpaRepository<Bid,Integer>{
	
	@Query(value="select b from Bid b")
	List<Bid> showAllBids();
	
	@Query(value="select b from Bid b where b.bidderName = ?1")
	List<Bid> showAllBidsForUser(String username);
	
	@Query(value="select b from Bid b where b.referenceno = ?1")
	List<Bid> showBidsOnTender(String referenceNo);

	@Transactional
	@Modifying
	@Query(value="delete from Bid b where referenceno=?1",nativeQuery = true)
	void deleteIfTenderRemoved(String referenceno);

	@Transactional
	@Modifying
	@Query(value="delete from Bid b where bidder_name=?1",nativeQuery = true)
	void deleteOldBid(String bidderName);
	
}
