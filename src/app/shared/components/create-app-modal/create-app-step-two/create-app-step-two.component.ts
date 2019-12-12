import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '@coreModels/project';

@Component({
  selector: 'app-create-app-step-two',
  templateUrl: './create-app-step-two.component.html',
  styleUrls: ['./create-app-step-two.component.scss'],
})
export class CreateAppStepTwoComponent implements OnInit, OnChanges {
  @Input() formRef: FormGroup;
  @Input() dependencies: Project[] = [];

  query: string = '';
  count: number = 0;
  filteredDependencies = this.dependencies;
  testInput: FormGroup;

  constructor() {
    this.testInput = new FormGroup({
      test: new FormControl('', Validators.required),
      prueba: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  get form() {
    return this.formRef.controls;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { dependencies } = changes;
    if (dependencies.currentValue && dependencies.currentValue.length > 0) {
      this.filteredDependencies = this.dependencies.map(x => x);
    }
  }

  p1 = query => {
    this.filteredDependencies = this.dependencies.map(x =>
      x.projectName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 ? x : null,
    );
    this.count = this.filteredDependencies.filter(x => x !== null).length;
  };
}
