// angular
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

// libraries
import { AngularFireModule }    from 'angularfire2';

// app
import { LoginComponent }       from './login/login.component';
import { EmailComponent }       from './email/email.component';
import { SignupComponent }      from './signup/signup.component';
import { MembersComponent }     from './members/members.component';

// config
export const firebaseConfig = {
    apiKey: "AIzaSyCEi5x7g_pse4loEUNcJP9S_w3gOD7L-EU",
    authDomain: "tut-ng-afauth.firebaseapp.com",
    databaseURL: "https://tut-ng-afauth.firebaseio.com",
    storageBucket: "tut-ng-afauth.appspot.com",
    messagingSenderId: "1056633248438"
}

@NgModule({
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        LoginComponent, 
        EmailComponent, 
        SignupComponent, 
        MembersComponent
    ]
})
export class AuthModule { }
