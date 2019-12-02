import { Component, OnInit, Input } from '@angular/core';
import { Project } from '@coreModels/project';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() dependencies: Project[] = null;

  constructor() {}

  ngOnInit() {}
}
