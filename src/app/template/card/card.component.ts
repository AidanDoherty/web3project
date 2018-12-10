import { Component, OnInit, Input } from '@angular/core';
import { IAuction } from 'src/app/interface/iauction';
import { Ibook } from 'src/app/book/IBook';
import { AuctionService } from 'src/app/service/auction.service';
import { Observable, observable, Observer, interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _auctionservice: AuctionService) { }
  @Input() data: IAuction;
  @Input() hidebutton: boolean
  @Input() auctionid
  testdata
  currentbid
  timeremaining
  displayTime:number

  ngOnInit() {

    if (!this.auctionid) {
      this._auctionservice.getBids(this.data.id).subscribe(data =>
        this.currentbid = data[0].bidAmount)
    }
    if (this.auctionid) {

      this._auctionservice.getAuction(this.auctionid).subscribe(data =>
        this.data = data.payload.data() as IAuction)

      this._auctionservice.getBids(this.auctionid).subscribe(data =>
        this.currentbid = data[0].bidAmount)
        
     }
     interval(1000).subscribe(data=>
      this.updateTime()
      )
  }
  updateTime(){
    this.timeremaining= this.data.EndDate-Date.now();
    this.displayTime=Math.round(this.timeremaining/(1000*60*60*24));
  }

  test() {
    this._auctionservice.setAuction().subscribe(data =>
      data.payload.data()
    )

  }
 
  
}
