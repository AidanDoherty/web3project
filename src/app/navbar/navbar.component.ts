import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { AfService} from '../providers/af.service'
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
 
  constructor(public AfService: AfService,
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
 
 ngOnInit() {

  this.authenticated = this.auth.isLoggedIn()
 }
 login(){
  console.log("Login with Google")
  this.AfService.loginWithGoogle();
   this.authenticated = true;
   console.log(this.authenticated)
}
logout(){
  
  this.AfService.logout();
  this.auth.doLogout()
  console.log(this.authenticated)
  this.authenticated = false;
  this.router.navigate(['/login']);
}
}
