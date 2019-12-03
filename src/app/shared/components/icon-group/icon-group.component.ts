import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '@sharedModels/icon';

@Component({
  selector: 'app-icon-group',
  templateUrl: './icon-group.component.html',
  styleUrls: ['./icon-group.component.scss'],
})
export class IconGroupComponent implements OnInit {
  @Input() icons: Icon[] = [];

  constructor() {}

  ngOnInit() {}
}
