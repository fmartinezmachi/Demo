import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() wrapperClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  sendEvent = () => this.wrapperClick.emit(true);
}
