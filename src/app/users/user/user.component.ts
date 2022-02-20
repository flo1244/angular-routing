import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription; //storing the subscription here. 

  constructor(private route: ActivatedRoute) { } //allows us access to currently loaded route. Gives us access to the id passed in the URL

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'] //add these parameters to app. module routes. 
    };

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => { 
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
    //     observables are a feature added by some other third-party package, not by Angular but heavily
// used by Angular which allow you to easily work with asynchronous tasks
// and this is an asynchronous task because the parameters of your currently loaded route might change
// at some point in the future** we subscribe to our params to update them or update the changes. 
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

// once you left, this component will be destroyed and when you come back, a new one will be created but this subscription here will always live on in memory
// because it's not closely tied to your component, so if the component is destroyed, the subscription won't. 

}
//when a page loads and needs some data from another component or data from api we can use params 