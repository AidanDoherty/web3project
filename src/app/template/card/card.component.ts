import { Component, OnInit, Input } from '@angular/core';
import { IAuction } from 'src/app/interface/iauction';
import { Ibook } from 'src/app/book/IBook';
import { AuctionService } from 'src/app/service/auction.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _auctionservice: AuctionService) { }
  @Input() data: IAuction;
 book:Ibook = new Ibook
 testdata
 currentbid = 0

  

  ngOnInit() {

    this._auctionservice.getBids("1").subscribe(data =>
      this.currentbid = data[0].bidAmount)

    this._auctionservice.getBook("1").subscribe(data =>
     this.book = data[0])

     
     
    this.testdata = {
      bookname: "Test Name",
      currentbid: 100
    }


  }

  function(endtime: Date) {
    var t = endtime.valueOf() - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  setAuction()
    {
      console.log("Auction Set")
      this._auctionservice.currentAuction = this.data
    }
}
