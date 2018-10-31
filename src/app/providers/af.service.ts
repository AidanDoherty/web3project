import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth'
import * as firebase from 'firebase/app'; 

@Injectable({
  providedIn: 'root'
})
export class AfService {
  user:Observable<firebase.User>
  constructor(public afAuth: AngularFireAuth) {
    this.user= afAuth.authState;
   }
   loginWithGoogle(){
     const provider = new firebase.auth.GoogleAuthProvider();
     this.afAuth.auth.signInWithPopup(provider)

   }
   logout(){
     this.afAuth.auth.signOut();
   }
}
