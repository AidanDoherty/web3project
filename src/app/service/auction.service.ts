import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { IAuction } from '../interface/iauction';
import { Ibook } from '../book/IBook';
import { Ibid } from '../auction/IBid';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private db: AngularFirestore) { }

  getAuctionlist() {
    return this.db.collection<IAuction>('Auctions').snapshotChanges()
  }

  getAuction(id: string) {
    return this.db.collection<IAuction>('Auctions').doc(id).get()
  }

  getBids(id:string) {

    return this.db.collection<Ibid>('Auctions/'+ id+'/Bids', bids=> bids.orderBy("bidAmount", "desc")).valueChanges()
  }

  addBid(id:string, bidamountd:number)
  {
    return this.db.collection<Ibid>('Auctions/'+ id+'/Bids').add({
      createdby: firebase.auth().currentUser.email,
      bidAmount: bidamountd
    })
  }


  getBook() {

    return this.db.collection<Ibook>('Books').doc('9bhXGB2sNEMlAYjssr5S').valueChanges()
  }
}
