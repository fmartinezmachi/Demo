import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() title = '';

  allClicked = false;
  expanded = true;

  constructor() {}

  ngOnInit() {}

  toggleExpanded = () => (this.expanded = !this.expanded);
}
