import { Component, OnInit, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActionMenuComponent implements OnInit {
  @Input() menuBody: TemplateRef<any>;
  @Input() menuHidden: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
