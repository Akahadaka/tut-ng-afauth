// angular
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// libraries
import { AngularFireModule }    from 'angularfire2';

// app
import { AppComponent }         from './app.component';

// config
export const firebaseConfig = {
    apiKey: "AIzaSyCEi5x7g_pse4loEUNcJP9S_w3gOD7L-EU",
    authDomain: "tut-ng-afauth.firebaseapp.com",
    databaseURL: "https://tut-ng-afauth.firebaseio.com",
    storageBucket: "tut-ng-afauth.appspot.com",
    messagingSenderId: "1056633248438"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
