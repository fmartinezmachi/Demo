import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '@coreModels/project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  icon: SafeResourceUrl = null;
  filteredDependencies = this.dependencies;
  testInput: FormGroup;

  constructor(private sanitizer: DomSanitizer) {
    this.testInput = new FormGroup({
      test: new FormControl('', Validators.required),
      prueba: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    const files = this.formRef.controls.urlImage.value;
    if (files instanceof FileList) {
      const file = files.item(0);
      this.icon = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
    }
  }

  get form() {
    return this.formRef.controls;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { dependencies } = changes;
    if (dependencies.currentValue && dependencies.currentValue.length > 0) {
      this.filteredDependencies = this.dependencies.map(x => x);
      this.count = this.filteredDependencies.filter(x => x !== null).length;
    }
  }

  onQueryChange = query => {
    this.filteredDependencies = this.dependencies.map(x =>
      x.projectName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 ? x : null,
    );
    this.count = this.filteredDependencies.filter(x => x !== null).length;
  };
}
