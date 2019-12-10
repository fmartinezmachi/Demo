import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@coreModels/project';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.scss'],
})
export class ComponentCardComponent implements OnInit {
  @Input() component: Project;
  @Input() active: boolean = false;

  constructor() {}

  ngOnInit() {}
}
