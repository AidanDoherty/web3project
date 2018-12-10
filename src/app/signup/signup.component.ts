import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
/* This Component handles the signing up of a user*/
export class SignupComponent implements OnInit {
  //This variable holds the values of the sign up form 
  form

  //injects our AuthService,FormBuilder and Router
  constructor(private auth: AuthService, private fb: FormBuilder, private myRoute: Router) {
    //then it sets the form variable to the form group for the signup page
    this.form = fb.group({
      //Applys the validation for the form fields
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  //This method signups up the user with the details they have supplied on the signup form
  signup() {
    console.log(this.form.value)
    //Calls the signup method from the auth service passing the form values
    this.auth.signup(this.form.value)
    this.myRoute.navigate(['login']);
  }

}
