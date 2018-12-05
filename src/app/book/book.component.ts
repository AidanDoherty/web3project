import { Component, OnInit } from '@angular/core';
import {Ibook} from './IBook'
import {BookserviceService} from '../bookservice.service'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  constructor(private _BookserviceService:BookserviceService) { }

  ngOnInit():void {
    this._BookserviceService.getbooks().subscribe(books =>
      this.books = books); 
  }

  books: Ibook[] = []
 
}
