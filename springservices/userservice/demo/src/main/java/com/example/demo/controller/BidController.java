package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.Bid;
import com.example.demo.service.BidService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/bid")
public class BidController {
	
	@Autowired
	BidService bserv;
	
	@GetMapping("/all")
	public ResponseEntity<List<Bid>> getAllUsers(){
		
		return ResponseEntity.ok(bserv.showAllBids());
	}
	
	@PostMapping("/allForUser")
	public ResponseEntity<List<Bid>> showAllBidsForUser(@RequestBody Bid bid){
		
		return ResponseEntity.ok(bserv.showAllBidsForUser(bid.getBidderName()));
	}
	
	@PostMapping("/allForTender")
	public ResponseEntity<List<Bid>> showBidsOnTender(@RequestBody Bid bid){
		
		return ResponseEntity.ok(bserv.showBidsOnTender(bid.getReferenceno()));
	}
	
	@PostMapping("/addBid")
	public ResponseEntity<Bid> addBid(@RequestBody Bid bid){
		
		return ResponseEntity.ok(bserv.addBid(bid));
	}
	
	@DeleteMapping("/deleteIfTenderRemoved")
	public ResponseEntity<String> deleteIfTenderRemoved(@RequestParam String referenceno){
		bserv.deleteIfTenderRemoved(referenceno);
		return ResponseEntity.ok(referenceno);
	}
	
}
