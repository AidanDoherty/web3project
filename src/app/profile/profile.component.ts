import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirestoreService} from '../firestore.service'
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayName:string;
  imageUrl:string;
  changingDetails:boolean=false;
  userBooks;
  constructor(private afAuth :AngularFireAuth, private _bs:BookserviceService) { 
    this.displayName=this.afAuth.auth.currentUser.displayName;
    this.imageUrl=this.afAuth.auth.currentUser.photoURL;
    this.userBooks= this._bs.getbooks();
    this.afAuth.auth.currentUser.displayName
  }
  updateProfile(name:string,image:string){
    if(this.displayName!=null)
    {
    this.afAuth.auth.currentUser.updateProfile({displayName:this.displayName,photoURL:this.imageUrl});
    }
    this.changingDetails=!this.changingDetails;
  }
  changeDets(){
    this.changingDetails=!this.changingDetails;
  }
  ngOnInit() {
    console.log(this.userBooks);
  }
}
