import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Technology } from '@coreModels/technology';
import { Project } from '@coreModels/project';
import { ProjectType } from '@coreEnums/project.enum';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit, OnChanges {
  @Input() dependencies: Project[] = null;
  @Input() images: string[] = null;
  @Input() navigationTypes: any = null;
  @Input() technologies: Technology[] = null;

  @Output() submitClick = new EventEmitter<Project>();

  appForm: FormGroup;
  step = 0;
  title = 'Create application';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.appForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectTypeName: [ProjectType.Application], // value fixed, we are generating an app
      id: ['', Validators.required],
      urlImage: [''],
      projectTechnologies: new FormArray(this.technologiesFBArray),
      navigationType: [''],
      projectDependencies: [''],
    });
  }

  /**
   * add form controls dinamically when receiving input values
   * changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    const { dependencies } = changes;
    if (dependencies.currentValue && dependencies.currentValue.length > 0) {
      this.appForm.addControl('projectDependencies', new FormArray(this.dependenciesArray));
    }
  }

  get projectDependencies() {
    const { projectDependencies } = this.appForm.value;
    return this.dependencies.filter((dependency, index) => projectDependencies[index]);
  }

  get projectTechnologies() {
    const { projectTechnologies } = this.appForm.value;
    return this.technologies.filter((technology, index) => projectTechnologies[index]);
  }

  get technologiesFBArray() {
    return this.technologies ? this.technologies.map(() => new FormControl(false)) : [];
  }

  get dependenciesArray() {
    return this.dependencies ? this.dependencies.map(() => new FormControl(false)) : [];
  }

  get projectData() {
    const {
      projectName,
      projectDescription,
      projectTypeName,
      urlImage,
      navigationType,
    } = this.appForm.value;
    return {
      projectName,
      projectDescription,
      projectTypeName,
      urlImage,
      navigationType,
      projectTechnologies: this.projectTechnologies,
      projectDependencies: this.projectDependencies,
      creator: {
        userId: 2,
        userName: 'Yensi',
        userEmail: 'yino@gft.com',
      },
      projectTypeId: 1,
      functionalAreaId: 1,
      brandId: 1,
      projectScopeId: 1,
    };
  }

  goToNextStep = () => this.step++;

  goToPrevStep = () => this.step--;

  resetForm = () => {
    this.appForm.reset();
  };

  submitForm = () => {
    const formData = this.projectData;
    this.submitClick.emit(formData);
  };
}
