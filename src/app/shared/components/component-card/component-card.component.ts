import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dependency } from '@coreModels/dependency';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.scss'],
})
export class ComponentCardComponent implements OnInit {
  @Input() component: Dependency;
  @Input() active: boolean = false;
  @Input() id = '';
  technologyName: string = 'android';
  @Output() clickCard = new EventEmitter<boolean[]>();

  constructor() {}

  ngOnInit() {
    if (this.component && this.component.dependencyTechnology) {
      this.technologyName = this.component.dependencyTechnology.toLowerCase();
    }
  }

  onClickCard = e => {
    this.clickCard.emit(e);
  };
}
