import { Component, OnInit } from '@angular/core';
import { AfService} from '../providers/af.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public AfService:AfService) { }

  ngOnInit() {
  }
  login(){
    this.AfService.loginWithGoogle();
  }

}
