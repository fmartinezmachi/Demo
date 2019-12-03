import { Component, OnInit, Input } from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() menu: NavMenuOption[] = [];
  constructor() {}

  ngOnInit() {}
}
