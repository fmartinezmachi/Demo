import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectComponentComponent } from './input-select-component.component';
import { ComponentCardComponent } from '../component-card/component-card.component';
import { SelectableListComponent } from '../selectable-list/selectable-list.component';

describe('InputSelectComponentComponent', () => {
  let component: InputSelectComponentComponent;
  let fixture: ComponentFixture<InputSelectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputSelectComponentComponent,
        ComponentCardComponent,
        SelectableListComponent,
      ],
    }).compileComponents();
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
