import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  bidCollection: AngularFirestoreCollection<Ibid>;
  Bids: Observable<Ibid[]>;

  allbids: Ibid[];
  errorMessage:string;

  constructor(private _http: HttpClient, private _afs:AngularFirestore){ 
    this.bidCollection = _afs.collection<Ibid>("bids");
  }

 getbids():Observable<Ibid[]>{
   this.Bids = this.bidCollection.valueChanges();
   this.Bids.subscribe(data => console.log("getBids()" + data));
   return this.Bids
   
 }
 addbid(bid:Ibid): void{
   this.bidCollection.add(bid);
 }

}
