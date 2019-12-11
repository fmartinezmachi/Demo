import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  TemplateRef,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.scss'],
})
export class SelectableListComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];
  @Input() multi: boolean = true;
  @Input() itemTpl: TemplateRef<any>;

  @Output() changeSelection = new EventEmitter<boolean[]>();

  selected: boolean[] = [];
  lastSelected: number = -1;

  constructor() {}

  ngOnInit() {
    this.selected = this.items ? Array(this.items.length).fill(false) : [];
  }

  ngOnChanges() {
    this.selected = this.items ? Array(this.items.length).fill(false) : [];
  }

  toggleSelectionUnique = (idx: number) => {
    this.selected[idx] = !this.selected[idx];
    if (this.selected[idx] === true && this.lastSelected !== -1) {
      this.selected[this.lastSelected] = false;
    }
    this.lastSelected = this.selected[idx] ? idx : -1;
  };

  toggleSectionMulti = (idx: number) => {
    this.selected[idx] = !this.selected[idx];
  };

  toggleSelection = (idx: number) => {
    this.multi ? this.toggleSectionMulti(idx) : this.toggleSelectionUnique(idx);
    this.changeSelection.emit(this.selected);
  };
}
