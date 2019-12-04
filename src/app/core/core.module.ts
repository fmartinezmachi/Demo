import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { FooterMenuComponent } from './components/footer/footer-menu/footer-menu.component';
import { HeaderComponent } from './components/header/header.component';

// Services
import { ApiService } from '@coreServices/api.service';
import { UserService } from '@coreServices/user.service';

// Modules
import { SharedModule } from '../shared/shared.module';
import { MockModule } from '@mocks/mock.module';

import { environment } from './../../environments/environment';

const providers = [ApiService, UserService];
const components = [FooterComponent, FooterMenuComponent, HeaderComponent];

const extraModules = environment.mockApi ? [MockModule] : [];

const imports = [CommonModule, SharedModule, ...extraModules];

@NgModule({
  declarations: [...components],
  imports,
  providers,
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
