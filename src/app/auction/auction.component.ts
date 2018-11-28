import { Component, OnInit } from '@angular/core';
import { bind } from '@angular/core/src/render3/instructions';
import { OrderPipe } from 'ngx-order-pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

 
  
  order: string = 'bidAmount';
  reverse: boolean = false;
  intervalId = 0;
  message;
  seconds = 30;
  bar = 0



  clearTimer() { clearInterval(this.intervalId); }
  ngOnInit() {
    this.start();
   
    
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
    console.log("Need database for this.")

  }








}