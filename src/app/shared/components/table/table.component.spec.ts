import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from 'angular-svg-icon';
import { TableComponent } from './table.component';
import { ReversePipe } from '../../pipes/reverse.pipe';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, ReversePipe, SvgIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
