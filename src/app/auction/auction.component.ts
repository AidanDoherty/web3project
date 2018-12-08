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


  constructor(private _auctionservice:AuctionService, private route:ActivatedRoute, private _afs:FirestoreService){

  }


  order: string = 'bidAmount';
  reverse: boolean = false;
  intervalId = 0;
  message;
  seconds = 30;
  bar = 0
  bids: Ibid[]
  bidamount: number;

auctiondetails: IAuction
sub
id

  clearTimer() { clearInterval(this.intervalId); }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this._auctionservice.getAuction(this.id).subscribe(data=>
      console.log(data.data()))
    
    this._auctionservice.getBids(this.id).subscribe(data=>
      console.log(this.bids = data))
    
  }
  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {

    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Sold!, Congratulations: UserID';
      } else {
        if (this.seconds < 0) { this.seconds = 30; } // reset
        this.message = `${this.seconds}`;
        this.bar = +this.message;


      }
    }, 1000);



  }
  bid() {
    this._auctionservice.addBid('1', this.bidamount)
  }








}