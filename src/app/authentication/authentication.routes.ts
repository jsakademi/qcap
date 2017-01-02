import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SimpleLayoutComponent } from '../layouts/simple-layout.component';

const routes: Routes = [{
    path      : 'auth',
    redirectTo: 'auth/login',
    pathMatch : 'full'
}, {
    path    : 'auth',
    children: [
        {
            path     : 'login',
            component: LoginComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutes {
}
