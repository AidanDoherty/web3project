import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../service/auction.service';
import { IAuction } from '../interface/iauction';
import { Ibook } from '../book/IBook';
import { BookComponent } from '../book/book.component';


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {

  constructor(private _auction: AuctionService) { }
  auctionlist: IAuction[]
  testaer

  

  ngOnInit() {
    this._auction.getAuctionlist().subscribe(data => {
      this.auctionlist = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })
      
    
      
      
    
  }



  getBook() {
    this._auction.getBook().subscribe(book =>
      book[0])
  }

}
