import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalContentComponent } from './aditional-content.component';

describe('AditionalContentComponent', () => {
  let component: AditionalContentComponent;
  let fixture: ComponentFixture<AditionalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditionalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
