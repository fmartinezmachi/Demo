import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { FooterMenuComponent } from './core/components/footer/footer-menu/footer-menu.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ProgressComponent } from './core/components/user-feed/progress/progress.component';
import { UserFeedComponent } from './core/components/user-feed/user-feed.component';
import { UserFeedTagComponent } from './core/components/user-feed/user-feed-tag/user-feed-tag.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FooterMenuComponent,
        ProgressComponent,
        UserFeedComponent,
        UserFeedTagComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
