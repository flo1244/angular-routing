import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server-resolver.service';

//will hold our array of multiple routes. These will be our routes composed of the path and the component we want. We also add RouterModule in imports.
//we call special method forRoot, which allows us to register some routes for our main application here.
// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   {
//     path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent }
//   ]},
//   // { path: 'users/:id/:name', component: UserComponent },//the colon tells angular that this is the dynamic part of the path. We are try to route a single user here. dynamically load a route. 
//   {
//     path: 'servers', component: ServersComponent, children: [
//       { path: ':id', component: ServerComponent },
//       { path: ':id/edit', component: EditServerComponent }
//     ]
//   },
   
//   // { path: 'servers/:id', component: ServerComponent }, //load a single component
//   // { path: 'servers/:id/edit', component: EditServerComponent } //we want to add more routes such as ? # etc. **moving this inside children to be able to load content next to menu instead of new page.

//   { path: 'not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: '/not-found' } //** is the wild card route redirected by all. make sure it is last route.
// ]; moved to our app-routing file.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
