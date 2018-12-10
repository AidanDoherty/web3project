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
/* This component is mainly used to display the bids*/ 
export class BidComponent implements OnInit {
  //Declares the bid varibles
  BidID:number;
  UserID:string;
  Price:number;
  //This is where the component receives the bids it displays
  @Input() bids:Ibid[]
  constructor(private _afs:FirestoreService, private afauth:AngularFireAuth) {
   }
  ngOnInit():void {
  }
}
