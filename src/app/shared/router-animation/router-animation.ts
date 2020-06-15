import { trigger, transition, style, query, animate } from '@angular/animations';

export const slideInAnimation =
trigger('routeAnimations',[
    transition('* <=> *', [
      style({ opacity: 0 }), 
      animate(500, style({opacity: 1}))
    ]) 
  ])