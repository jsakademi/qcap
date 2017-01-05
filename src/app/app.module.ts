import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { LocationStrategy,
         HashLocationStrategy }         from '@angular/common';

import { AppComponent }                 from './app.component';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';
import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';
import { SmartResizeDirective }         from './shared/smart-resize.directive';

// Routing Module
import { AppRoutingModule }             from './app.routing';
import { RestangularModule }            from 'ng2-restangular';
import { environment }                  from "../environments/environment"

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule,RequestOptions }    from '@angular/http';
import { CoreRequestOptions }           from "./shared/request.options";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2BootstrapModule,
        ChartsModule,
        HttpModule,
        AuthenticationModule,
        RestangularModule.forRoot((RestangularProvider) => {
                RestangularProvider.setBaseUrl(environment.baseUrl);
            }
        ),
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective,
        SmartResizeDirective
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy},
        { provide: RequestOptions, useClass: CoreRequestOptions }],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
