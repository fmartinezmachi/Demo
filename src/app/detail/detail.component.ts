import { Component, OnInit } from '@angular/core';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { Icon } from '@sharedModels/icon';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { DetailService } from './detail.service';
import { detailIcons } from '@mocks/icons';
import { detailMenu, headerMenu } from '@mocks/menu';
import { learnMore } from '@mocks/learn-more';
import { sections } from '@mocks/sections';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  activeDetailMenuOption = 'Overview';
  activeHeaderMenuOption = 'Catalogue';
  headerMenu: NavMenuOption[] = headerMenu;
  detailMenu: NavMenuOption[] = detailMenu;
  learnMore: LearnMoreIcon[] = learnMore;
  sections: AditionalContentSection[] = sections;
  sectionsInfo: Observable<any>;
  headerInfo: Observable<any>;

  constructor(private detailService: DetailService, private router: Router) {}

  ngOnInit() {
    this.sectionsInfo = this.detailService.getDetailSectionsData();
    this.headerInfo = this.detailService.getDetailHeaderData();
  }

  updateActiveMenuLink = (option: NavMenuOption) => {
    this.activeHeaderMenuOption = option.label;
    this.router.navigate([option.link]);
  };

  updateSectionMenuLink = (option: NavMenuOption) => {
    this.activeDetailMenuOption = option.label;
  };
}
