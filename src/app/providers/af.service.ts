import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth'
import {Observable} from 'rxjs';
import * as firebase from 'firebase/app'; 
import { FirebaseApp } from 'angularfire2';

@Injectable()

export class AfService {
user:Observable<firebase.User>;
  constructor(public afAuth : AngularFireAuth) {
    this.user = afAuth.authState;
   }
   loginWithGoogle(){
     const provider = new firebase.auth.GoogleAuthProvider();
     this.afAuth.auth.signInWithPopup(provider);
   }
   logout(){
     this.afAuth.auth.signOut();
     
   }
}
