import { HomeService } from './home.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { homeIcons } from '@mocks/icons';
import { learnMore } from '@mocks/learn-more';
import { headerMenu } from '@mocks/menu';
import { sections } from '@mocks/sections';
import { Icon } from '@sharedModels/icon';
import { Router } from '@angular/router';
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
  headerMenu: NavMenuOption[] = headerMenu;
  activeHeaderMenuOption = 'My Projects';
  sections: AditionalContentSection[] = sections;
  learnMore: LearnMoreIcon[] = learnMore;
  homeIcons: Icon[] = homeIcons;
  title = 'My Projects';
  appDependencies$: Observable<Project[]> = null;
  componentDependencies$: Observable<Project[]> = null;
  technologies$: Observable<Technology[]> = null;
  images$ = ['ICO red', 'ICO black', 'ICO small', 'ICO big'];
  navigationTypes: string[] = [];
  subscriptions = new Subscription();

  constructor(
    private router: Router,
    private modalService: ModalService,
    private homeService: HomeService,
  ) {}

  ngOnInit() {
    this.technologies$ = this.homeService.getTechnologies();
    this.appDependencies$ = this.homeService.getApplicationDependencies();
    this.componentDependencies$ = this.homeService.getComponentDependencies();
    this.navigationTypes = this.homeService.navigationTypes;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  showCreateModal = () => this.modalService.toggleVisibility();

  submitCreateAppForm = (form: Project) => {
    this.subscriptions.add(
      this.homeService.sendForm(form).subscribe(
        response => {
          alert(`App created successfully`);
          this.modalService.toggleVisibility();
          this.modalRef.resetForm();
          this.appDependencies$ = this.homeService.getApplicationDependencies();
        },
        error => alert(`Something went wrong: ${error.msg}`),
      ),
    );
  };

  updateActiveMenuLink = (option: NavMenuOption) => {
    this.activeHeaderMenuOption = option.label;
    this.router.navigate([option.link]);
  };
}
