import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../firestore.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../service/auth.service';
import {Observable} from  'rxjs';
import { map, filter } from 'rxjs/operators';
import { IUser } from '../login/IUser';

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
  constructor(private afAuth: AngularFireAuth,private _afs:FirestoreService,private auth:AuthService) {
    this.user=auth.getcurrentUser();
    this.userInfo=_afs.getusers();
   }

  ngOnInit() {
   
  }
  test(){
    console.log();
    

  }
}
