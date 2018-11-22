import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Ibid} from './auction/IBid'
import { IAuction } from './auction/IAuction';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  bidCollection: AngularFirestoreCollection<Ibid>;
  auctionCollection:AngularFirestoreCollection<IAuction>;
  Auctions:Observable<IAuction[]>;
  Bids: Observable<Ibid[]>;

  allbids: Ibid[];
  allauctions:IAuction[];

  errorMessage:string;
  
  constructor(private _http: HttpClient, private _afs:AngularFirestore){ 
    this.bidCollection = _afs.collection<Ibid>("Bids");
    this.auctionCollection=_afs.collection<IAuction>("Auctions")
  }

 getbids():Observable<Ibid[]>{
   this.Bids = this.bidCollection.valueChanges();
   this.Bids.subscribe(data => console.log("getBids()" + data));
   return this.Bids
 }
 getauctions():Observable<IAuction[]>{
  this.Auctions = this.auctionCollection.valueChanges();
  this.Auctions.subscribe(data => console.log("getAuctions()" + data));
  return this.Auctions
}
 addbid(bid:Ibid): void{
   this.bidCollection.add(bid);
 }
 addauction(auction:IAuction): void{
  this.auctionCollection.add(auction);
}

}
