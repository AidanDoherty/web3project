import { Component, OnInit, Input } from '@angular/core';
import {Ibook} from './IBook'
import {BookserviceService} from '../bookservice.service'
import { AuctionService } from '../service/auction.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  constructor(private _BookserviceService:BookserviceService, private _auctionservice:AuctionService) { }

  @Input() bookid
  @Input() auctionid

  book: Ibook;
  currentbid
  

  ngOnInit():void {
   this._auctionservice.getBook().subscribe(data=>
    console.log(this.book = data as Ibook))

    this._auctionservice.getBids("1").subscribe(data=>
      this.currentbid = data[0].bidAmount)
  }

  
}
