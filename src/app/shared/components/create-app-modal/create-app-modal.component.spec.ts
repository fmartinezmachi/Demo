import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateAppModalComponent } from './create-app-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { IconGroupComponent } from '../icon-group/icon-group.component';
import { AccordionComponent } from '../accordion/accordion.component';

describe('CreateAppModalComponent', () => {
  let component: CreateAppModalComponent;
  let fixture: ComponentFixture<CreateAppModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AccordionComponent,
        CreateAppModalComponent,
        IconGroupComponent,
        ModalComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
