import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GooglebookserviceService} from '../GoogleBookService/googlebookservice.service'
import { IGoogleBook } from '../GoogleBookService/IGoogleBook';
import {Ibook} from '../book/IBook'

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {
 @Input() title:string ;
 authors:string;
 publisher:string;
 description:string;
 url:string

 @Output() AddbookinfoEE: EventEmitter<any> = new EventEmitter();

 bookdata:IGoogleBook;
  constructor(private _GooglebookserviceService: GooglebookserviceService) { }

  BookData: IGoogleBook;
  ngOnInit() {
    this._GooglebookserviceService.getTitleList(this.title).subscribe(data =>{
      this.bookdata = data
    });
  }

  selectbook(title,authors,publisher,description,url ):boolean{
    let book: Ibook = {
      bookId: 0,
      bookname: title,
      auther: authors,
      reserve: 0,
      description: description,
      imgsrc: url,
      publisher:publisher
      

    }
    this.AddbookinfoEE.emit(book);
    
    return false;
  }

}
