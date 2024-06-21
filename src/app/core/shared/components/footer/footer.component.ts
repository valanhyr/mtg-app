import { Component } from '@angular/core';
import { footerType } from './types/FooterType';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerData: footerType = {
    socialMedia: {
      title: 'Facebook',
      url: 'https://www.facebook.com',
      active: true
    },
    siteMap: {
      title: 'Home',
      url: '/home',
      active: true
    }
  };
}
