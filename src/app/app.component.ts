import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './shared/router-animation/router-animation';

@Component({
  selector: 'app-root',

  template: `<div [@routeAnimations]="prepareRoute(outlet)"><router-outlet #outlet="outlet"></router-outlet></div>`,
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'HRM';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
