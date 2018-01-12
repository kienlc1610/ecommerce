import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {PageNotFoundComponent} from './components/page-not-found/pageNotFound.component';
import {CRMComponent} from './components/crm/crm.component';
import {LeadComponent} from './components/crm/lead.component';
import {TodoComponent } from './components/todo/todo.component';
import {TodoCreateComponent} from './components/todo/todo.create.component';
import {TodoEditComponent} from './components/todo/todo.edit.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {TodoService} from './services/todos.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    /* Crm components */
    {path: 'dashboard/crm', component: CRMComponent, canActivate: [AuthGuard]},
    {path: 'dashboard/crm/leads', component: LeadComponent, canActivate: [AuthGuard]},
    {path: 'dashboard/crm/leads/:id', component: LeadComponent, canActivate: [AuthGuard]},

    /* Profile */
    {path: 'dashboard/profile', component: ProfileComponent, canActivate: [AuthGuard]},

    /* Todos */
    { path : "dashboard/todos", component : TodoComponent, canActivate : [AuthGuard] },
    { path : "dashboard/todos-create", component : TodoCreateComponent, canActivate : [AuthGuard] },
    { path : "dashboard/todos-edit", component : TodoEditComponent, canActivate : [AuthGuard] },

    /* Redirect to 404 when page is found */
    {path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '404'}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        DashboardComponent,
        ProfileComponent,
        CRMComponent,
        LeadComponent,
        PageNotFoundComponent,
        TodoComponent,
        TodoCreateComponent,
        TodoEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FlashMessagesModule
    ],
    providers: [ValidateService, AuthService, AuthGuard, TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
