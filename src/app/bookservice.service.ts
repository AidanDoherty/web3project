import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {Ibook} from './book/Ibook'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  bookCollection: AngularFirestoreCollection<Ibook>;
  Books: Observable<Ibook[]>;

  allbooks: Ibook[];
  errorMessage:string;

  constructor(private _http: HttpClient, private _afs:AngularFirestore){ 
    this.bookCollection = _afs.collection<Ibook>("Books");
  }

  getUserBooks(uid){
    this.bookCollection = this._afs.collection<Ibook>("Books", book=> book.where(uid,"==",book.userid));
  }
 getbooks():Observable<Ibook[]>{
   this.Books = this.bookCollection.valueChanges();
   this.Books.subscribe(data => console.log("getbooks()" + data));
   return this.Books
 }
 addbook(book:Ibook): void{
   this.bookCollection.add(book);
 }

}