import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): any {
    const gif = [
      'wtf-1.gif',
      'wtf-2.gif',
      'wtf-3.gif',
      'wtf-4.gif',
      'wtf-5.gif',
      'wtf-6.gif',
      'wtf-7.gif',
      'wtf-8.gif',
      'wtf-9.gif',
      'wtf-10.gif',
      'wtf-11.gif',
      'wtf-12.gif',
      'wtf-13.gif',
      'wtf-14.gif',
      'wtf-15.gif',
      'wtf-16.gif',
      'wtf-17.gif',
      'wtf-18.gif',
      'wtf-19.gif',
      'wtf-20.gif',
      //      'wtf-21.gif', 
      'wtf-22.gif',
      'wtf-23.gif',
      'wtf-24.gif',
      'wtf-25.gif',
      'wtf-26.gif',
      'wtf-27.gif',
      'wtf-28.gif',
      'wtf-29.gif',
      'wtf-30.gif',
      'wtf-31.gif',
      'wtf-32.gif',
      'wtf-33.gif',
      'wtf-34.gif',
      'wtf-35.gif',
      'wtf-36.gif',
      'wtf-37.gif',
      //      'wtf-38.gif', 
      'wtf-39.gif',
      'wtf-40.gif',
      'wtf-41.gif',
      'wtf-42.gif',
      'timeout-1.gif',
      'timeout-2.gif',
      'timeout-3.gif',
      'timeout-4.gif',
      'timeout-5.gif',
      'timeout-6.gif',
      'timeout-7.gif',
      'timeout-8.gif',
      'timeout-9.gif',
      'timeout-10.gif',
      'timeout-11.gif',
      'timeout-12.gif',
      'timeout-13.gif',
      'timeout-14.gif',
      'timeout-15.gif',
      'timeout-16.gif',
      'timeout-17.gif',
      'timeout-18.gif',
      'timeout-19.gif',
      'timeout-20.gif',
      '21.gif',
      '22.gif',
      '23.gif',
      '24.gif',
      '25.gif',
      '26.gif',
      '27.gif',
      '28.gif',
      '29.gif',
      '30.gif',
      '1.gif',
      '2.gif',
      '3.gif',
      '4.gif',
      '5.gif',
      '6.gif',
      '7.gif',
      '8.gif',
      '9.gif',
      '10.gif',
      '11.gif',
      '12.gif',
      '13.gif',
      '14.gif',
      '15.gif',
      '16.gif',
      '17.gif',
      '18.gif',
      '19.gif',
      '20.gif',

    ];

    $('body').css({ 'background': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/images/404/' + gif[Math.floor(Math.random() * gif.length)] + ')' });
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  refreshPage(): void {
    this.router.navigate(['/home'])
      .then(() => {
        window.location.reload();
      });

  }
}
