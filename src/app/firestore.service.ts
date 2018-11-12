import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  bidsCollection:AngularFirestoreCollection<Ibid>;

  bids:Observable<Ibid[]>;

  allBids:Ibid[];
  errorMessage:string;

  constructor(private _http:HttpClient,private _afs:AngularFirestore) {
    this.bidsCollection=_afs.collection<Ibid>("bids");
   }

   getBids():Observable<Ibid[]>{
     this.bids=this.bidsCollection.valueChanges();
     this.bids.subscribe(data=>console.log("getBids"+data));
     return this.bids;
   }

   addBid(bid:Ibid):void{
     this.bidsCollection.add(bid);
   }
}
