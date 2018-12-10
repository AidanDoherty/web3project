import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IAuction } from '../interface/iauction';
import { AuctionService } from '../service/auction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayName: string;
  imageUrl: string;
  changingDetails: boolean = false;
  usersAuctions: IAuction[]


  constructor(private _auctionService: AuctionService, private afAuth: AngularFireAuth) {
    this.displayName = this.afAuth.auth.currentUser.displayName;
    this.imageUrl = this.afAuth.auth.currentUser.photoURL;
  }
  updateProfile(name: string, image: string) {
    if (this.displayName != null) {
      this.afAuth.auth.currentUser.updateProfile({ displayName: this.displayName, photoURL: this.imageUrl });
    }
    this.changingDetails = !this.changingDetails;
  }
  changeDets() {
    this.changingDetails = !this.changingDetails;
  }
  ngOnInit() {

    this._auctionService.getCurrentUsersAuctions().subscribe(data =>
     
     console.log(data)
     
      // this.usersAuctions = data.map(e => {
      //   return {
      //     id: e.payload.doc.id,
      //     ...e.payload.doc.data()
      //   }
      // })
    
  )}


}
