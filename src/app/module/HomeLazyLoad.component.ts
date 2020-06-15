import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../shared/router-animation/router-animation';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'selector-home-lazy-load',
    template: `<div [@routeAnimations]="prepareRoute(outlet)"><router-outlet #outlet="outlet"></router-outlet></div>`,    animations: [
        slideInAnimation
        // animation triggers go here
      ]
})

export class HomeLazyLoadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
      }
}