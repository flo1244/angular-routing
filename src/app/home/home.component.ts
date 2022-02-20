import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  
  onLoadServers(id: number) {
     //complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'}); //passing queryparams and fragments
  }
//So this is now programmatically routing to a different page, still it doesn't reload our page, it does the same as if we clicked a routerLink
// but with this router navigate method, we are able to trigger this programmatically, so trigger this in
// our code.**binded to our click listener
  
  onLogIn() {
    this.authService.login();
  }

  onLogOut() {
    this.authService.logout();
  }
  
}
