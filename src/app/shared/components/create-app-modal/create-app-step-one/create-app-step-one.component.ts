import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-app-step-one',
  templateUrl: './create-app-step-one.component.html',
  styleUrls: ['./create-app-step-one.component.scss'],
})
export class CreateAppStepOneComponent implements OnInit {
  @Input() formRef: FormGroup;
  @Input() technologies: string[] = [];

  constructor() {}

  ngOnInit() {}
}
