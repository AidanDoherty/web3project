import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../firestore.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../service/auth.service';
import {Observable} from  'rxjs';
import { map, filter } from 'rxjs/operators';
import { IUser } from '../login/IUser';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  userInfo :Observable<IUser[]>;
  email:string;
  name:string;
  image:string;
  constructor(private afAuth: AngularFireAuth,private _afs:FirestoreService,private auth:AuthService, private db: AngularFirestore) {
    this.user=auth.getcurrentUser();
    this.email=this.user.email;
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
