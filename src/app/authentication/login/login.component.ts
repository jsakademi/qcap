import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    constructor(private authenticationService: AuthenticationService, private router: Router) { }
    
    login() {
        this.authenticationService.login({username: 'burhan', password: '12345'}).subscribe(() => {
            this.router.navigate(['dashboard']);
        }, error => console.log(error));
    }

}
