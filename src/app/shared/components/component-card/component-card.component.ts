import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@coreModels/project';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.scss'],
})
export class ComponentCardComponent implements OnInit {
  @Input() component: Project;
  @Input() active: boolean = false;
  technologyName: string = 'android';
  @Output() clickCard = new EventEmitter<boolean[]>();

  constructor() {}

  ngOnInit() {
    if (this.component.projectTechnologies.length > 0) {
      this.technologyName = this.component.projectTechnologies[0].technologyName.toLowerCase();
    }
  }

  onClickCard = e => {
    this.clickCard.emit(e);
  };
}
