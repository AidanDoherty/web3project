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
 @Input() hidebutton: boolean
@Input() auctionid
 testdata
 currentbid
 

  ngOnInit() {

    if(!this.auctionid)
    {
    this._auctionservice.getBids(this.data.id).subscribe(data =>
    this.currentbid = data[0].bidAmount)
    }
     if(this.auctionid)
     {

      this._auctionservice.getAuction(this.auctionid).subscribe(data=>
       this.data = data.payload.data() as IAuction )

      this._auctionservice.getBids(this.auctionid).subscribe(data =>
        this.currentbid = data[0].bidAmount)
  
     }
    


  }

  
  
  test()
    {
      this._auctionservice.setAuction().subscribe(data => 
        data.payload.data()
      )
        
    }
}
