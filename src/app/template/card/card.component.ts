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

      this.timeremaining = new Observable<string>((observer: Observer<string>) => {
        setInterval(() => observer.next(new Date().toString()), 1000);
      });

      
      this._auctionservice.test2().subscribe(data=> 
       console.log(data ))

        
     }
     interval(1000).subscribe(data=>
      this.timeremaining= this.data.EndDate - Date.now()
      )
  }

  test() {
    this._auctionservice.setAuction().subscribe(data =>
      data.payload.data()
    )

  }
 
  
}
