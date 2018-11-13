import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service'
import { Ibook } from '../book/IBook';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private _BookserviceService: BookserviceService) { }
  bookId: number;
  bookname: string;
  auther: string;
  reserve: number;
  description: string;
  imgsrc: string;
  
  ngOnInit() {
  }


  addbook(): void {
    let book: Ibook = {
      bookId: this.bookId,
      bookname: this.bookname,
      auther: this.auther,
      reserve: this.reserve,
      description: this.description,
      imgsrc: this.imgsrc

    
    }
    console.log(book)
    this._BookserviceService.addbook(book);
  }
}
