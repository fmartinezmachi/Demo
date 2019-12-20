import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Technology } from '@coreModels/technology';

@Component({
  selector: 'app-create-app-step-one',
  templateUrl: './create-app-step-one.component.html',
  styleUrls: ['./create-app-step-one.component.scss'],
})
export class CreateAppStepOneComponent implements OnInit, OnChanges {
  @Input() formRef: FormGroup;
  @Input() technologies: Technology[] = [];

  radioTechnologies: any[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { technologies } = changes;
    if (technologies && technologies.currentValue.length > 0) {
      this.radioTechnologies = technologies.currentValue.map(technology => ({
        label: technology.technologyName,
        value: technology,
      }));
    }
  }

  get technologyIdentifier() {
    const { technologyIdentifier = '' } = this.form.projectTechnology.value || {};
    return technologyIdentifier;
  }

  get form() {
    return this.formRef.controls;
  }
}
