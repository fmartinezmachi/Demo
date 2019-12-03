import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[];
  constructor() {}

  ngOnInit() {}
}
