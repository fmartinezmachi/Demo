import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  @Input() query: string;
  @Input() id: string;
  @Output() queryChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onChange = val => {
    this.query = val;
    this.queryChange.emit(val);
  };
}
