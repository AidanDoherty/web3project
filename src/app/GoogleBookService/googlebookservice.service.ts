import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { IGoogleBook } from './IGoogleBook';
import { Ibook } from '../book/IBook';
@Injectable({
  providedIn: 'root'
})
export class GooglebookserviceService {
  url: string = "https://www.googleapis.com/books/v1/volumes?q=";
  data: IGoogleBook;
  constructor(private _http: HttpClient) {

  }
  getTitleList(title: string ): Observable<IGoogleBook> {
    return this._http.get<IGoogleBook>(this.url + title)
  }
  getAutherList(auther: string ): Observable<IGoogleBook> {
    return this._http.get<IGoogleBook>(this.url + auther)
  }
  
}

