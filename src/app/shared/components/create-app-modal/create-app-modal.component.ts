import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Dependency } from '@coreModels/dependency';
import { NavigationType } from '@coreModels/navigation-type';
import { Project } from '@coreModels/project';
import { Technology } from '@coreModels/technology';
import { ProjectType, ProjectScope, ProjectFunctionalArea } from '@coreEnums/project.enum';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit {
  @Input() dependencies: Dependency[] = null;
  @Input() navigationTypes: NavigationType[] = null;
  @Input() technologies: Technology[] = null;

  @Output() submitClick = new EventEmitter<Project>();

  appForm: FormGroup;
  step = 0;
  title = 'Create application';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.appForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectType: [ProjectType.Application], // value fixed, we are generating an app
      projectIdentification: ['', Validators.required],
      urlImage: [''],
      projectTechnology: ['', Validators.required],
      navigationType: [''],
      projectDependencies: [[]],
    });
  }

  get projectData() {
    const {
      projectName,
      projectIdentification,
      projectType,
      projectTechnology: { technologyName: projectTechnologyName },
      projectDependencies,
    } = this.appForm.value;

    return {
      projectName,
      projectDescription: '',
      projectIdentification,
      projectPath: '',
      projectImage: '',
      projectImageUrl: '',
      projectReadmeUrl: '',
      projectType,
      projectTechnologyName,
      projectNavigationType: '',
      projectInitialNavigation: '',
      projectScope: ProjectScope.Functional,
      projectFunctionalArea: ProjectFunctionalArea.Cards,
      projectDependencies: projectDependencies,
    };
  }

  get stepOneValid() {
    const { controls } = this.appForm;
    return controls.projectName.value !== '' && controls.projectTechnology.value !== '';
  }

  goToNextStep = () => this.step++;

  goToPrevStep = () => this.step--;

  reset = () => {
    this.step = 0;
    this.appForm.reset();
  };

  submitForm = () => {
    const formData = this.projectData;
    this.submitClick.emit(formData);
  };
}
