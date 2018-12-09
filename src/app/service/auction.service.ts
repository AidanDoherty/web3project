import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { IAuction } from '../interface/iauction';
import { Ibook } from '../book/IBook';
import { Ibid } from '../auction/IBid';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private db: AngularFirestore, private _auth: AngularFireAuth) { }


  currentAuction: IAuction
  CurrentHighistBid

  

  getAuctionlist() {
    return this.db.collection<IAuction>('Auctions').snapshotChanges()
  }
  
  setAuction()
  {
    return this.db.collection<IAuction>('Auctions').doc("IpEqMeaZBjlfOL492GcC").snapshotChanges()
  }

  getAuction(id: string) {
    return this.db.collection<IAuction>('Auctions').doc(id).snapshotChanges()
  }

  getBids(id:string) {

    return this.db.collection<Ibid>('Auctions/'+ id+'/Bids', bids=> bids.orderBy("bidAmount", "desc")).valueChanges()
  }

  addBid(id:string, bidamountd:number)
  {
    return this.db.collection<Ibid>('Auctions/'+ id+'/Bids').add({
      createdby: firebase.auth().currentUser.displayName,
      bidAmount: bidamountd
    })
  }


  getBook(id: string) {

    return this.db.collection<Ibook>('Auctions/'+ id+'/book').valueChanges()
  }

  getCurrentUsersAuctions()
  {
    return this.db.collection<IAuction>('Auctions', acution=> acution.where("createdby","==",this._auth.auth.currentUser.uid)).valueChanges()
  }

  addAuction(auction: IAuction)
  {
    this.db.collection<IAuction>('Auctions').add(auction).then(a=>
      console.log("Auction Added")
    )
  }

  getUserID()
  {
    return this._auth.auth.currentUser.uid
  }
}