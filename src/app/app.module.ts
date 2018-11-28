import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { OrderModule } from 'ngx-order-pipe';
import { AddbookComponent } from './addbook/addbook.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BidComponent } from './bid/bid.component';
import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { NotificationService } from './service/notification.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MatButtonModule,MatCardModule,MatFormFieldModule,
MatInputModule,MatToolbarModule,MatListModule,MatProgressSpinnerModule} from '@angular/material'

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addbook', component: AddbookComponent,canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'auction', component: AuctionComponent,canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent}
];


@NgModule({
  declarations: [
    
    AppComponent,
    BookComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    AuctionComponent,
    AddbookComponent,
    DisplayBookComponent,
    AuctionComponent,
    BidComponent,
    SignupComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    OrderModule ,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,MatListModule,
    MatProgressSpinnerModule,
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    HttpClientModule,
    FlexLayoutModule
    
  ],
  exports: [ RouterModule, ],
  providers: [ AuthService, AuthGuard, NotificationService, AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
