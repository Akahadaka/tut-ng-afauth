// angular
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// app
import { AuthModule }           from './auth/auth.module';
import { AppComponent }         from './app.component';

import { routes }               from './app.routes';

@NgModule({
     declarations: [
         AppComponent
     ],
     imports: [
         BrowserModule,
         FormsModule,
         HttpModule,
         AuthModule,
         routes
     ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
