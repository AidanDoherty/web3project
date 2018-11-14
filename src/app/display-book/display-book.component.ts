import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {GooglebookserviceService} from '../GoogleBookService/googlebookservice.service'
import { IGoogleBook } from '../GoogleBookService/IGoogleBook';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {
 @Input() title:string ;
 @Output() AddbookinfoEE: EventEmitter<any> = new EventEmitter();

 bookdata:IGoogleBook;
  constructor(private _GooglebookserviceService: GooglebookserviceService) { }

  BookData: IGoogleBook;
  ngOnInit() {
    this._GooglebookserviceService.getTitleList(this.title).subscribe(data =>{
      this.bookdata = data
    });
  }

  selectbook(title):boolean{
    this.AddbookinfoEE.emit(title);
    alert("working")
    return false;
  }

}
