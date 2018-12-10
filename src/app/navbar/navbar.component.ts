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
  user: Observable<firebase.User>;
  authenticated:boolean
 
  constructor(
   private afAuth: AngularFireAuth,private router: Router, private auth: AuthService) { 
     console.log("Navbar Constructor")
    this.afAuth.authState.subscribe(
      (auth) =>{
        if (auth !=null){
          this.user = this.afAuth.authState
          this.authenticated = true;
        }
      }
    )
     
  }
 /* this is a basic nav bar , it has a navgaurd which restricts access to to the tabs based on authenticated status */
 ngOnInit() {

  this.authenticated = this.auth.isLoggedIn()
 }
 login(){
  console.log("Login with Google")
  this.auth.doGoogleLogin();
   this.authenticated = true;
   console.log(this.authenticated)
}
logout(){
  
  
  this.auth.doLogout()
  console.log(this.authenticated)
  this.authenticated = false;
  this.router.navigate(['/login']);
}
}
