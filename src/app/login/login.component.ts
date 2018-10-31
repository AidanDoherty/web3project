import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {AfService} from '../providers/af.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  authenticated:boolean = false;
 
  constructor(public AfService: AfService,
   private afAuth: AngularFireAuth,) { 
     this.afAuth.authState.subscribe(
       (auth) =>{
         if (auth !=null){
           this.user =this.afAuth.authState;
           this.authenticated = true;
         }
       }
     )
  }

 

  ngOnInit() {
  }
  login(){
    console.log("Login")
    this.AfService.loginWithGoogle();
     this.authenticated = true;
     console.log(this.authenticated)
  }
  logout(){
    
    this.AfService.logout();
    console.log(this.authenticated)
    this.authenticated = false;
  }


}
