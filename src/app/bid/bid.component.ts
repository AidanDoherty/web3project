import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import {Ibid} from '../auction/IBid'
@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  constructor(private _afs:FirestoreService) {
   }

  ngOnInit():void {
    this._afs.getbids().subscribe(bids =>
      this.bids = bids);
  }
  bids: Ibid[];
  addBid(){
    
    
  }
}
