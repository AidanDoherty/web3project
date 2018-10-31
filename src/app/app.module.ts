import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';
import { HttpClientModule} from '@angular/common/http'
import { AfService, } from './providers/af.service';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    
    AppComponent,
    BookComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuctionComponent
  ],
  imports: [
   
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase,),
    BrowserAnimationsModule,
    BrowserModule,

     RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'auction', component: AuctionComponent },
      { path: 'book', component: BookComponent }
    ])
  ],
  exports: [ RouterModule ],
  providers: [AfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
