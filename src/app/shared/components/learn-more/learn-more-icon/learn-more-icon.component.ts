import { Component, OnInit, Input } from '@angular/core';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';

@Component({
  selector: 'app-learn-more-icon',
  templateUrl: './learn-more-icon.component.html',
  styleUrls: ['./learn-more-icon.component.scss'],
})
export class LearnMoreIconComponent implements OnInit {
  @Input() data: LearnMoreIcon;

  constructor() {}

  ngOnInit() {}
}
