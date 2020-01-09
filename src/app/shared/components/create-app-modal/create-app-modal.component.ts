import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Dependency } from '@coreModels/dependency';
import { NavigationType } from '@coreModels/navigation-type';
import { Project } from '@coreModels/project';
import { Technology } from '@coreModels/technology';
import { ProjectType, ProjectScope, ProjectFunctionalArea } from '@coreEnums/project.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit, OnDestroy {
  @Input() dependencies: Dependency[] = null;
  @Input() navigationTypes: NavigationType[] = null;
  @Input() technologies: Technology[] = null;

  @Output() submitClick = new EventEmitter<Project>();

  appForm: FormGroup;
  subscriptions = new Subscription();
  step = 0;
  title = 'Create application';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.appForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      // projectType: [ProjectType.Application], // value fixed, we are generating an app
      projectIdentification: ['', Validators.pattern('^[a-zA-Z0-9]+([\\s-.-][a-zA-Zd0-9]+)*')],
      urlImage: [''],
      projectTechnology: [null, Validators.required],
      navigationType: [''],
      projectDependencies: [[]],
    });
    this.onTechnologyChange();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
      projectType: ProjectType.Application,
      projectTechnologyName,
      projectNavigationType: '',
      projectInitialNavigation: '',
      projectScope: ProjectScope.Functional,
      projectFunctionalArea: ProjectFunctionalArea.Cards,
      projectDependencies: projectDependencies.map((x, idx) => ({
        ...x,
        dependencyOrder: idx,
      })),
      creator: {
        name: 'JJ',
        email: 'jj@gft',
      },
    };
  }

  get stepOneValid() {
    const { controls } = this.appForm;
    return (
      controls.projectName.status !== 'INVALID' &&
      controls.projectTechnology.status !== 'INVALID' &&
      controls.projectIdentification.status !== 'INVALID'
    );
  }

  goToNextStep = () => this.step++;

  goToPrevStep = () => this.step--;

  onTechnologyChange() {
    this.subscriptions.add(
      this.appForm.get('projectTechnology').valueChanges.subscribe(technology => {
        if (!technology) {
          return;
        }
        const { technologyIdentifier = null } = technology;
        if (technologyIdentifier !== '2') {
          this.appForm.get('projectIdentification').patchValue('');
        }
      }),
    );
  }

  reset = () => {
    this.step = 0;
    this.appForm.reset();
  };

  submitForm = () => {
    const formData = this.projectData;
    this.submitClick.emit(formData);
  };
}
