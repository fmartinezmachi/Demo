import { Component, OnInit, Input } from '@angular/core';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss'],
})
export class LearnMoreComponent implements OnInit {
  @Input() content: LearnMoreIcon[] = [];

  constructor() {}

  ngOnInit() {}
}
