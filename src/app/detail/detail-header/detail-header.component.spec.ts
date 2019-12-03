import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHeaderComponent } from './detail-header.component';
import { IconGroupComponent } from 'src/app/shared/components/icon-group/icon-group.component';

describe('DetailHeaderComponent', () => {
  let component: DetailHeaderComponent;
  let fixture: ComponentFixture<DetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailHeaderComponent, IconGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
