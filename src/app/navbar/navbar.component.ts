import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //This variable hold the current user
  user: Observable<firebase.User>;
  //This variable is used to test if a user is logged in 
  authenticated:boolean
  
  //injects AngularFireAuth,Router and our AuthService
  constructor(
   private afAuth: AngularFireAuth,private router: Router, private auth: AuthService) { 
     console.log("Navbar Constructor")
     //Here is where the auth state is subscribed too
    this.afAuth.authState.subscribe(
      (auth) =>{
        //If a user is logged in then the user variable is set to the current user and authenticaticated is set to true
        if (auth !=null){
          this.user = this.afAuth.authState
          this.authenticated = true;
        }
      }
    )
     
  }
 /* this is a basic nav bar , it has a navgaurd which restricts access to to the tabs based on authenticated status */
 ngOnInit() {
  //Checks if someone is logged in on intialisation
  this.authenticated = this.auth.isLoggedIn()
 }
 //Allows user to login by clicking the navbar rather than the main button
 login(){
  console.log("Login with Google")
  //Calls the doGoogleLogin from the auth service
  this.auth.doGoogleLogin();
   this.authenticated = true;
}
//this method will log the user out
logout(){
  //Calls the logout method from the auth service
  this.auth.doLogout()
  console.log(this.authenticated)
  this.authenticated = false;
  this.router.navigate(['/login']);
}
}
