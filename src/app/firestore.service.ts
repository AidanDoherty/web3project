import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

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
     this.bidsCollection.snapshotChanges().pipe(
       map(actions=> actions.map(a=>{
         const data = a.payload.doc.data() as Ibid;
         const id = a.payload.doc.id;
         return {id,...data};
       }))
     );
     return this.bids;
   }

   addBid(bid:Ibid):void{
     this.bidsCollection.add(bid);
   }
   deleteBid(id:string):void{
     this.bidsCollection.doc(id).delete()
     .catch(error=>{console.log("delete bid error"+error);})
     .then(()=>console.log('deleteBid:id='+id));
   }
}
