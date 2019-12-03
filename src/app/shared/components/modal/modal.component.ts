import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ModalService } from './modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;

  isVisible = new Observable<boolean>();

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.isVisible = this.modalService.visible$;
  }

  closeModal = (event = null) => {
    if (event && !event.target.classList.contains('modal')) {
      return;
    }
    this.modalService.toggleVisibility();
  };
}
