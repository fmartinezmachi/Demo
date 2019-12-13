import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccordionComponent } from '../shared/components/accordion/accordion.component';
import { CreateAppModalComponent } from '../shared/components/create-app-modal/create-app-modal.component';
import { HomeComponent } from './home.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { ModalComponent } from '../shared/components/modal/modal.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [
        AccordionComponent,
        CreateAppModalComponent,
        HomeComponent,
        LoaderComponent,
        ModalComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
