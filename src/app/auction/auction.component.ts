import { Component, OnInit } from '@angular/core';
import { bind } from '@angular/core/src/render3/instructions';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  
  bids: Ibid[] = [
    {
      bidUserName:'Aidan',
      bidID:1,
      bidAmount:50
    },
    {
      bidUserName:'Kyle',
      bidID:5,
      bidAmount:75
    },
    {
      bidUserName:'James',
      bidID:4,
      bidAmount:100
    },
    {
      bidUserName:'Mike',
      bidID:3,
      bidAmount:125
    },
    {
      bidUserName:'Aike',
      bidID:2,
      bidAmount:10
    }
   
  ]
  
  order: string = 'bidAmount';
  reverse: boolean = false;
  intervalId = 0;
  message = '';
  seconds = 30;
  bar = 0
  
  display: Ibid[]


  clearTimer() { clearInterval(this.intervalId); }
  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Sold!, Congratulations: USERNAME';
      } else {
        if (this.seconds < 0) { this.seconds = 30; } // reset
        this.message = `${this.seconds}`;
        this.bar = +this.message;
        
        
      }
    }, 1000);


    
  }
  bid(){
      console.log("Need database for this.")

  }
  

   
 
  
  
  
 
}