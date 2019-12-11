import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalService } from '../shared/components/modal/modal.service';
import { Technology } from '@coreModels/technology';
import { Project } from '@coreModels/project';
import { CreateAppModalComponent } from '../shared/components/create-app-modal/create-app-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ModalService],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(CreateAppModalComponent, { static: false }) modalRef: CreateAppModalComponent;
  appDependencies$: Observable<Project[]> = null;
  componentDependencies$: Observable<Project[]> = null;
  technologies$: Observable<Technology[]> = null;
  navigationTypes: string[] = [];
  subscriptions = new Subscription();  

  constructor(private modalService: ModalService, private homeService: HomeService) {}

  ngOnInit() {
    this.appDependencies$ = this.homeService.getApplicationDependencies();
    this.technologies$ = this.homeService.getTechnologies();
    this.componentDependencies$ = this.homeService.getComponentDependencies();
    this.navigationTypes = this.homeService.navigationTypes;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  showCreateModal = () => {
    debugger;
    this.modalService.toggleVisibility();
  };

  submitCreateAppForm = (form: Project) => {
    this.subscriptions.add(
      this.homeService.sendForm(form).subscribe(response => {
        alert(`App created successfully`);
        this.modalService.toggleVisibility();
        this.modalRef.resetForm();
        this.appDependencies$ = this.homeService.getApplicationDependencies();
      }),
    );
  };
}
