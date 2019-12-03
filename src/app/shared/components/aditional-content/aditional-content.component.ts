import { Component, OnInit, Input } from '@angular/core';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';

@Component({
  selector: 'app-aditional-content',
  templateUrl: './aditional-content.component.html',
  styleUrls: ['./aditional-content.component.scss'],
})
export class AditionalContentComponent implements OnInit {
  @Input() sections: AditionalContentSection[] = [];

  constructor() {}

  ngOnInit() {}
}
