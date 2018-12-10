import { Component, OnInit, Input } from '@angular/core';
import { IAuction } from 'src/app/interface/iauction';
import { Ibook } from 'src/app/book/IBook';
import { AuctionService } from 'src/app/service/auction.service';
import { Observable, observable, Observer, interval } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  constructor(private _auctionservice: AuctionService) { }
  @Input() data: IAuction;
  @Input() hidebutton: boolean
  @Input() auctionid
  ngOnInit() {
    
    if (this.auctionid) {

      this._auctionservice.getAuction(this.auctionid).subscribe(data =>
        this.data = data.payload.data() as IAuction)

     
        
     }
     
  
  }

}
