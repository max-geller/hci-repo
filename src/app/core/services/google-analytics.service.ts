import { Injectable } from '@angular/core';

declare let gtag: Function;


@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    gtag('event', eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    })
  }
}

// tslint:disable-next-line: comment-format
//To use for tracking behaviors, just import into the component's method:
//    SendAddToCartEvent(){ 
//      this
//      .googleAnalyticsService
//      .eventEmitter("add_to_cart", "shop", "cart", "click", 10);
//    }