import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Technology } from '@coreModels/technology';

@Component({
  selector: 'app-create-app-step-one',
  templateUrl: './create-app-step-one.component.html',
  styleUrls: ['./create-app-step-one.component.scss'],
})
export class CreateAppStepOneComponent implements OnInit {
  @Input() formRef: FormGroup;
  @Input() technologies: Technology[] = [];

  constructor() {}

  ngOnInit() {}

  get technologyIdentifier() {
    const { technologyIdentifier = '' } = this.form.projectTechnology.value || {};
    return technologyIdentifier;
  }

  get radioTechnologies() {
    return this.technologies.map(technology => ({
      label: technology.technologyName,
      value: technology,
    }));
  }

  get form() {
    return this.formRef.controls;
  }
}
