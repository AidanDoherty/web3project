import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import {Ibid} from '../auction/IBid'
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  BidID:number;
  UserID:string;
  Price:number;
  bidAmount:number;
  constructor(private _afs:FirestoreService, private afauth:AngularFireAuth) {
   }

  ngOnInit():void {
    

  }
  

  addBid(){
   console.log(this.bids)
    
  }
}
