import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Ibid} from './auction/IBid';
import { IAuction } from './auction/IAuction';
import {IUser} from './login/IUser';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  bidCollection: AngularFirestoreCollection<Ibid>;
  auctionCollection:AngularFirestoreCollection<IAuction>;
  userCollection:AngularFirestoreCollection<IUser>;

  Auctions:Observable<IAuction[]>;
  Bids: Observable<Ibid[]>;
  Users:Observable<IUser[]>;

  allbids: Ibid[];
  allauctions:IAuction[];
  allusers:IUser[];

  errorMessage:string;
  
  constructor(private _http: HttpClient, private _afs:AngularFirestore){ 
    this.bidCollection = _afs.collection<Ibid>("Bids");
    this.auctionCollection=_afs.collection<IAuction>("Auctions");
    this.userCollection=_afs.collection<IUser>("Users")
  }

 getbids():Observable<Ibid[]>{
   this.Bids = this.bidCollection.valueChanges();
   this.Bids.subscribe(data => console.log("getBids()" + data));
   return this.Bids;
 }
 getauctions():Observable<IAuction[]>{
  this.Auctions = this.auctionCollection.valueChanges();
  this.Auctions.subscribe(data => console.log("getAuctions()" + data));
  return this.Auctions;
}
getusers():Observable<IUser[]>{
  this.Users = this.userCollection.valueChanges();
  this.Users.subscribe(data => console.log("getUsers()" + data));
  return this.Users;
}
 addbid(bid:Ibid): void{
   this.bidCollection.add(bid);
 }
 addauction(auction:IAuction): void{
  this.auctionCollection.add(auction);
  }
  adduser(value,userId){
    let tempUser:IUser={
      uid:userId,
      email:value.email,
      password:value.password,
      name:value.name,
      pictureUrl:value.image
    }
    console.log(tempUser);
    this.userCollection.add(tempUser);
  }
}
