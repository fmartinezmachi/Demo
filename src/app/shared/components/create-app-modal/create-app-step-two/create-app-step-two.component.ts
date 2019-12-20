import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '@coreModels/project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Dependency } from '@coreModels/dependency';

@Component({
  selector: 'app-create-app-step-two',
  templateUrl: './create-app-step-two.component.html',
  styleUrls: ['./create-app-step-two.component.scss'],
})
export class CreateAppStepTwoComponent implements OnInit, OnChanges {
  @Input() formRef: FormGroup;
  @Input() dependencies: Dependency[] = [];

  query: string = '';
  count: number = 0;
  icon: SafeResourceUrl = null;
  filteredDependencies = this.dependencies;
  dependenciesByTech = this.dependencies;
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

  filterByTech = (dependencies: Dependency[], technology: string): Dependency[] => {
    return dependencies.filter(
      x => x.dependencyTechnology.toLowerCase() === technology.toLowerCase(),
    );
  };

  ngOnChanges(changes: SimpleChanges): void {
    const { dependencies } = changes;
    if (dependencies.currentValue && dependencies.currentValue.length > 0) {
      this.dependenciesByTech = this.filterByTech(
        this.dependencies,
        this.form.projectTechnology.value.technologyName,
      );
      this.filteredDependencies = [...this.dependenciesByTech];
      this.count = this.filteredDependencies.filter(x => x !== null).length;
    }
  }

  onQueryChange = query => {
    this.dependenciesByTech = this.filterByTech(
      this.dependencies,
      this.form.projectTechnology.value.technologyName,
    );
    this.filteredDependencies = this.dependenciesByTech.map(x =>
      x.dependencyName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 ? x : null,
    );
    this.count = this.filteredDependencies.filter(x => x !== null).length;
  };
}
