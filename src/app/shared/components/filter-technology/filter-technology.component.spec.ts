import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTechnologyComponent } from './filter-technology.component';

describe('FilterTechnologyComponent', () => {
  let component: FilterTechnologyComponent;
  let fixture: ComponentFixture<FilterTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
