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
  //Fistly the user varibles are all declared
  // display name is the users name
  displayName: string;
  //image url is url  of the profile picture
  imageUrl: string;
  //changing details is used to check if the users has checked the button to update their info
  changingDetails: boolean = false;
  //This array is used hold the auctions the user has created
  usersAuctions: IAuction[]

  //The constructor sets the display name to the current logged in user and does the same for the image.
  //It also injects our auction Service and AngularFireAuth
  constructor(private _auctionService: AuctionService, private afAuth: AngularFireAuth) {
    this.displayName = this.afAuth.auth.currentUser.displayName;
    this.imageUrl = this.afAuth.auth.currentUser.photoURL;
  }
  // profile checks for updates on the current user and updates or edits them accordly using there UID (unique user id)
  updateProfile(name: string, image: string) {
    if (this.displayName != null) {
      this.afAuth.auth.currentUser.updateProfile({ displayName: this.displayName, photoURL: this.imageUrl });
    }
    // then it sets changing details back to flase as they are done changing
    this.changingDetails = !this.changingDetails;
  }
  // This method is just used to switch changing details between true/false
  changeDets() {
    this.changingDetails = !this.changingDetails;
  }
  ngOnInit() {
    // On initialization the Auction service is subscribed too allowing it to get the firestore doc of auctions where the uid is the same as the current users
    this._auctionService.getCurrentUsersAuctions().subscribe(data =>
     
      this.usersAuctions = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    
  )}


}
