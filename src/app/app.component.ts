import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { footerMenu } from '@mocks/menu';
import { HTTPStatus } from './core/interceptors/http-interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  footerMenu: NavMenuOption[] = footerMenu;
  showUserFeed = true;
  HTTPActivity = false;

  constructor(router: Router, private httpStatus: HTTPStatus) {
    router.events.subscribe((routerInfo: RouterEvent) => {
      if (routerInfo instanceof NavigationEnd) {
        this.showUserFeed = routerInfo.url !== '/login';
      }
    });
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
      this.HTTPActivity = status;
      console.log(`Http activity is currently:  ${status ? 'on' : 'off'}`);
    });
  }
}
