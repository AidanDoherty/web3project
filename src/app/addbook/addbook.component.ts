import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service'
import { Ibook } from '../book/IBook';
import { Router } from '@angular/router';
import { IAuction } from '../interface/iauction';
import { AuctionService } from '../service/auction.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FirebaseAuth } from '@angular/fire';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  hasbookdetails: boolean;

  constructor(private _auctionservice:AuctionService,
     private _BookserviceService: BookserviceService, 
     private myRoute: Router) { }

  bookId: number;
  bookname: string;
  auther: string;
  reserve: number;
  description: string;
  imgsrc: string;
  showdisplaybook: boolean;
  title:string;
  publisher:string;
  errorMessage: string;
  auction: IAuction;
  endDate:string;
  condition:string;


  ngOnInit() {
   
  }

  showbook(): boolean {
    
    this.showdisplaybook = !this.showdisplaybook;
    return false;
  }
  addbookstringfromtb(evt):boolean{
    const newbook = evt as Ibook;
    this.bookId = newbook.bookId;
    this.auther = newbook.auther;
    this.description = newbook.description;
    this.imgsrc = newbook.imgsrc;
    this.bookname = newbook.bookname;
    this.publisher = newbook.publisher;
   this.condition = newbook.condition;
    return false;
    
  }
  addbook(): void {
    this.auction = {
    createdby: this._auctionservice.getUserID(),
    bookname: this.bookname,
    auther: this.auther,
    description: this.description,
    imgsrc: this.imgsrc,
    publisher: this.publisher,
    condition : this.condition,
    EndDate: Date.parse(this.endDate),
   
    }, err => {
      alert(err);
      this.errorMessage = err.message;
    }
    console.log(this.auction, this.reserve,this.endDate)

    this._auctionservice.addAuction(this.auction, this.reserve)

alert("you added the book: " + this.auction.bookname)
this.myRoute.navigate(['profile'])
  }


  addAuction()
  {

  
  }
  getid(){
    this._BookserviceService.getbooks() ;
    
    
  }
}
