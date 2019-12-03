import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavMenuComponent implements OnInit {
  @Input() menu?: NavMenuOption[] = [];
  @Input() activeOption = '';
  @Output() menuLinkClicked = new EventEmitter<NavMenuOption>();

  constructor() {}

  ngOnInit() {}

  menuClick = (event, menuOption: NavMenuOption) => {
    event.preventDefault();
    this.menuLinkClicked.emit(menuOption);
  };
}
