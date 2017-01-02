import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './authentication-guard.service';
import { AuthenticationRoutes } from './authentication.routes';
import { SimpleLayoutComponent } from '../layouts/simple-layout.component';

@NgModule({
    imports: [
        AuthenticationRoutes
    ],
    declarations: [LoginComponent, SimpleLayoutComponent],
    providers: [AuthGuard, AuthenticationService, AUTH_PROVIDERS]
})
export class AuthenticationModule { }