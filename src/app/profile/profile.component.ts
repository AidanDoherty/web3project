import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayName:string;
  imageUrl:string;
  changingDetails:boolean=false;
  constructor(private afAuth :AngularFireAuth) { 
    this.displayName=this.afAuth.auth.currentUser.displayName;
    this.imageUrl=this.afAuth.auth.currentUser.photoURL;
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
  }
}
