import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSectionsComponent } from './detail-sections.component';
import { NavMenuComponent } from 'src/app/shared/components/nav-menu/nav-menu.component';
import { OverviewComponent } from './overview/overview.component';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';

describe('DetailSectionsComponent', () => {
  let component: DetailSectionsComponent;
  let fixture: ComponentFixture<DetailSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavMenuComponent, DetailSectionsComponent, OverviewComponent, SafePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
