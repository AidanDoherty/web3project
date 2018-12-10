import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //user holds the details of the user
  user: Observable<firebase.User>;
  //this variable is used to check if the user is logged in to render some components on the nav bar
  authenticated: boolean = false;
  // holds error messages to be displayed
  errorMessage: string;
  //is used to hold the form values
  form;

  //Sets the form variable to the form group in the html page
  //Also injects AngularFireAuth,FormBuilder,Router and our AuthService
  constructor(
    private afAuth: AngularFireAuth, private fb: FormBuilder, private myRoute: Router, private auth: AuthService) {
    this.form = fb.group({
      // Applying the validators to the form
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }




  ngOnInit() {
  }

  /*the following is the diffrent login methoods Google and Facebook use OAuth2 login */
  login() {
    console.log(this.form.value)
    //Calling the auth service method
    this.auth.doLogin(this.form.value).then(res => {
      //then using the router redirects you to the home page
      this.myRoute.navigate(['home']);
    }, err => {
      //if there is an error it will alert the error to the user
      alert(err);
      this.errorMessage = err.message;
    })
  }
  //When the signup button is pressed is routes the user to the signup page
  signup() {
    this.myRoute.navigate(['signup']);
  }
  // this is used to log in users with their google account
  doGoogleLogin() {
    //Calling the auth service method
    this.auth.doGoogleLogin().
      then(res => {
        //then using the router redirects you to the home page
        this.myRoute.navigate(['home']);
      }, err => {
        //if there is an error it will alert the error to the user
        console.log(err);
        alert(err);
        this.errorMessage = err.message;
      })
  }
  //This method is used to log in users with their facebook account
  doFaceBookLogin() {
    //Calling the auth service method
    this.auth.doFacebookLogin().
      then(res => {
        //then using the router redirects you to the home page
        this.myRoute.navigate(['home']);
      }, err => {
         //if there is an error it will alert the error to the user
        console.log(err);
        alert(err);
        this.errorMessage = err.message;
      })
  }

}
