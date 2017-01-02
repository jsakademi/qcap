import { NgModule }                 from '@angular/core';
import {
    Routes,
    RouterModule
}             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';
import { AuthGuard } from './authentication/authentication-guard.service';

export const routes: Routes = [
    {
        path      : '',
        redirectTo: 'dashboard',
        pathMatch : 'full'
    }, {
        path       : '',
        component  : FullLayoutComponent,
        canActivate: [AuthGuard],
        data       : {
            title: 'Home'
        },
        children   : [
            {
                path        : 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
