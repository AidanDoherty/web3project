import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router'
import { NotificationService } from './notification.service';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  loggedInStatus: boolean = false;
  authState: any = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private notifier: NotificationService,private _afs:FirestoreService) {
    this.user = _firebaseAuth.authState;
    this._firebaseAuth.authState.subscribe((auth)=>{
      this.authState=auth;
    });
  }

  signup(value) {
    // clear all messages
    this.notifier.display(false, '');
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(value.email, value.password)
      .then((res) => {
        const message = 'A verification email has been sent, please check your email and follow the steps!';
        this.notifier.display(true, message);
        this.sendEmailVerification();
        res.user.updateProfile({displayName:value.name,photoURL:value.image});
        this.router.navigate(['login']);
      })
      .catch(err => {
        console.log(err);
        this.notifier.display(true, err.message);
      });
  }

  sendEmailVerification() {
    this._firebaseAuth.authState.subscribe(user => {
      user.sendEmailVerification()
        .then(() => {
          console.log('email sent');
        });
    });
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.loggedInStatus = true;
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this._firebaseAuth.auth.signOut()
        resolve();
      }
      else{
        reject();
      }
      this.loggedInStatus = false;

    });
  }

  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this._firebaseAuth.auth.signInWithPopup(provider);
  }

  isLoggedIn():boolean {
      return this.loggedInStatus;
  }
  getcurrentUser():any{
    return this.authState;
  }
}