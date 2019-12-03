import { Component, OnInit, Input } from '@angular/core';
import { UserFeedTag } from './user-feed-tag';
import { TagType } from '@coreModels/tag-type';

@Component({
  selector: 'app-user-feed-tag',
  templateUrl: './user-feed-tag.component.html',
  styleUrls: ['./user-feed-tag.component.scss'],
})
export class UserFeedTagComponent implements OnInit {
  @Input() tag: UserFeedTag;
  tagType = TagType;
  constructor() {}

  ngOnInit() {}
}
