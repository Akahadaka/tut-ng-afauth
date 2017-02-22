// angular
import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

// libraries
import { AngularFire }                  from 'angularfire2';
import { AuthProviders, AuthMethods }   from 'angularfire2';

// app
import { moveIn, fallIn, moveInLeft }   from '../../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {

    name: any;
    error: any;
    state: string = '';
    
    constructor(public af: AngularFire, public router: Router) {
        this.af.auth.subscribe((auth) => {
            if (auth){
                this.name = auth;
            }
        });
    }

    ngOnInit() {
    }

    logout() {
        this.af.auth.logout().then((success) => {
            this.router.navigateByUrl('/login');
        }).catch((err) => {
            this.error = err;
        });
    }

}
