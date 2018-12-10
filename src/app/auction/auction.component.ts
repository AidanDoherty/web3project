import { Component, OnInit } from '@angular/core';

import { bind } from '@angular/core/src/render3/instructions';
import { OrderPipe } from 'ngx-order-pipe';
import { Observable } from 'rxjs';

import { FirestoreService } from '../firestore.service';
import { ActivatedRoute } from '@angular/router';
import { IAuction } from '../interface/iauction';
import { AuctionService } from '../service/auction.service';
import { Ibid } from './IBid';



@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {


  constructor(private _auctionservice: AuctionService, private route: ActivatedRoute, private _afs: FirestoreService) {

  }

  id
  bidamount: number;
  bids: Ibid[]
  biderror
  topBid: number;

  ngOnInit() {

    this.bidamount = 0

    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    //this._auctionservice.getAuction(this.id).

    this._auctionservice.getBids(this.id).subscribe(data =>
      console.log(this.bids = data))
      
  }

  Addbid(): boolean {
    this.topBid=this.bids[0].bidAmount;
    if (this.topBid!= null) {
      if (this.bidamount > this.topBid) {
        this._auctionservice.addBid(this.id, this.bidamount);

        this.biderror = ""
      }
      else {
        this.biderror = "Bid not high enough, Try Again"
      }
    }
    else {
      this._auctionservice.addBid(this.id, this.bidamount);
    }
    console.log(this.bidamount, this.id)

    this.topBid=this.bids[0].bidAmount;
    console.log(this.topBid)
    return false
  }








}