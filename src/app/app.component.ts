import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showUserFeed = true;

  constructor(router: Router) {
    router.events.subscribe((routerInfo: RouterEvent) => {
      if (routerInfo instanceof NavigationEnd) {
        this.showUserFeed = routerInfo.url !== '/login';
      }
    });
  }
}
