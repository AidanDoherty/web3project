import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
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

  user: Observable<firebase.User>;
  authenticated:boolean = false;
 
  errorMessage: string;
  form;

  constructor(
   private afAuth: AngularFireAuth,private fb: FormBuilder, private myRoute: Router, private auth: AuthService) { 
     this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


 

  ngOnInit() {
  }

  login() {
    console.log(this.form.value)
    this.auth.doLogin(this.form.value).then(res => {
      this.myRoute.navigate(['home']);
    }, err=> {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}
