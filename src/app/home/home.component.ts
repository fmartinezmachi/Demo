import { HomeService } from './home.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ModalService } from '../shared/components/modal/modal.service';
import { CreateAppModalComponent } from '../shared/components/create-app-modal/create-app-modal.component';
import { Dependency } from '@coreModels/dependency';
import { Technology } from '@coreModels/technology';
import { Project } from '@coreModels/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ModalService],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(CreateAppModalComponent, { static: false }) modalRef: CreateAppModalComponent;
  appDependencies$: Observable<Dependency[]> = null;
  technologies$: Observable<Technology[]>;
  navigationTypes$: Observable<NavigationType[]>;
  subscriptions = new Subscription();
  showLoader = false;

  constructor(private modalService: ModalService, private homeService: HomeService) {}

  ngOnInit() {
    this.appDependencies$ = this.homeService.dependencies$;
    this.technologies$ = this.homeService.technologies$;
    this.navigationTypes$ = this.homeService.navigationTypes$;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  showCreateModal = () => {
    this.modalService.toggleVisibility();
  };

  submitCreateAppForm = (form: Project) => {
    this.showLoader = true;
    this.subscriptions.add(
      this.homeService.sendForm(form).subscribe(response => {
        this.modalService.toggleVisibility();
        this.modalRef.resetForm();
      }),
    );
  };
}
