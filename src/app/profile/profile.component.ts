import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../firestore.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayName:string;
  image:string;
  constructor(private afAuth: AngularFireAuth,private _afs:FirestoreService,private auth:AuthService, private db: AngularFirestore) {
    this.displayName=this.afAuth.auth.currentUser.displayName;
    this.image=this.afAuth.auth.currentUser.photoURL;
   }

  ngOnInit() {
    
  
  }
  test(){
    /* this.db.collection('Users', userdata=>
    userdata.where('email', "==" ,this.email.toLowerCase())).valueChanges().subscribe(data=>
     console.log(data)); */
      console.log(this.afAuth.auth.currentUser.photoURL);
  }
}
