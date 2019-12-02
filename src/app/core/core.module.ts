import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer/footer-menu/footer-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { ProgressComponent } from './components/user-feed/progress/progress.component';
import { UserFeedTagComponent } from './components/user-feed/user-feed-tag/user-feed-tag.component';

// Services
import { ApiService } from '@coreServices/api.service';
import { UserService } from '@coreServices/user.service';

// Modules
import { SharedModule } from '../shared/shared.module';
import { MockModule } from '@mocks/mock.module';

import { environment } from './../../environments/environment';

const providers = [ApiService, UserService];
const components = [
  FooterComponent,
  FooterMenuComponent,
  HeaderComponent,
  ProgressComponent,
  UserFeedComponent,
  UserFeedTagComponent,
];

const extraModules = environment.mockApi ? [MockModule] : [];

const imports = [CommonModule, SharedModule, ...extraModules];

@NgModule({
  declarations: [...components],
  imports,
  providers,
  exports: [HeaderComponent, FooterComponent, UserFeedComponent],
})
export class CoreModule {}
