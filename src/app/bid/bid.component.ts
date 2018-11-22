import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import {Ibid} from '../auction/IBid'
@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  constructor(private _afs:FirestoreService) {}

  BidID:number;
  UserID:number;
  Price:number;

  ngOnInit():void {
    this._afs.getbids().subscribe(bids =>this.bids = bids);
  }
  bids: Ibid[];
  addBid(){
    let tempBid:Ibid={
      bidID:this.BidID,
      bidUserID:this.UserID,
      bidAmount:this.Price
    }
    this._afs.addbid(tempBid);
  }
}
