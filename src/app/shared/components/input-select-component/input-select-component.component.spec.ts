import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectComponentComponent } from './input-select-component.component';

describe('InputSelectComponentComponent', () => {
  let component: InputSelectComponentComponent;
  let fixture: ComponentFixture<InputSelectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
