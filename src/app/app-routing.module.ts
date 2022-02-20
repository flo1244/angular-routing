import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

//will hold our array of multiple routes. These will be our routes composed of the path and the component we want. We also add RouterModule in imports.
//we call special method forRoot, which allows us to register some routes for our main application here.
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ]},
  // { path: 'users/:id/:name', component: UserComponent },//the colon tells angular that this is the dynamic part of the path. We are try to route a single user here. dynamically load a route. 
  {
      path: 'servers',
    //   canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
       component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
   
  // { path: 'servers/:id', component: ServerComponent }, //load a single component
  // { path: 'servers/:id/edit', component: EditServerComponent } //we want to add more routes such as ? # etc. **moving this inside children to be able to load content next to menu instead of new page.

  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'} },
  { path: '**', redirectTo: '/not-found' } //** is the wild card route redirected by all. make sure it is last route.
];

@NgModule({
  imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}