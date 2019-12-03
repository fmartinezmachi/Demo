import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Icon } from '@sharedModels/icon';
import { ModalService } from '../../shared/components/modal/modal.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Input() icons: Icon[] = [];
  @Input() title = '';

  @Output() createAppClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  showCreateAppModal = () => this.createAppClick.emit(true);
}
