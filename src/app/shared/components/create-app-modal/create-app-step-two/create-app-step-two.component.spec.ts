import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { CreateAppStepTwoComponent } from './create-app-step-two.component';
import { SearcherComponent } from '../searcher/searcher.component';
import { InputSelectComponentComponent } from '../../input-select-component/input-select-component.component';
import { ComponentCardComponent } from '../../component-card/component-card.component';
import { SelectableListComponent } from '../../selectable-list/selectable-list.component';

describe('CreateAppStepTwoComponent', () => {
  let component: CreateAppStepTwoComponent;
  let fixture: ComponentFixture<CreateAppStepTwoComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        ComponentCardComponent,
        CreateAppStepTwoComponent,
        InputSelectComponentComponent,
        SearcherComponent,
        SelectableListComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppStepTwoComponent);
    component = fixture.componentInstance;
    component.formRef = formBuilder.group({
      projectName: [''],
      projectTechnology: [''],
      projectDependencies: [''],
      urlImage: [''],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
