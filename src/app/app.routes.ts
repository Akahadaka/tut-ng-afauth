// angular
import { ModuleWithProviders }          from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

// app
import { AppComponent }                 from './app.component';
import { LoginComponent }               from './auth/login/login.component';
import { SignupComponent }              from './auth/signup/signup.component';
import { EmailComponent }               from './auth/email/email.component';
import { MembersComponent }             from './auth/members/members.component';

// services
//import { AuthGuard }                    from './auth/auth.service';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent }//, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
