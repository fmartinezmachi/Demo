import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AditionalContentComponent } from '../shared/components/aditional-content/aditional-content.component';
import { DetailComponent } from './detail.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { DetailSectionsComponent } from './detail-sections/detail-sections.component';
import { IconGroupComponent } from '../shared/components/icon-group/icon-group.component';
import { NavMenuComponent } from '../shared/components/nav-menu/nav-menu.component';
import { PageMenuComponent } from '../shared/components/page-menu/page-menu.component';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { SearchInputComponent } from '../shared/components/search-input/search-input.component';
import { LearnMoreComponent } from '../shared/components/learn-more/learn-more.component';
import { OverviewComponent } from './detail-sections/overview/overview.component';
import { LearnMoreIconComponent } from '../shared/components/learn-more/learn-more-icon/learn-more-icon.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AditionalContentComponent,
        DetailComponent,
        DetailHeaderComponent,
        DetailSectionsComponent,
        IconGroupComponent,
        LearnMoreComponent,
        LearnMoreIconComponent,
        NavMenuComponent,
        OverviewComponent,
        PageMenuComponent,
        SafePipe,
        SearchInputComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
