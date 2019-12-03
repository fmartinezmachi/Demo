import { TagType } from '@coreModels/tag-type';

interface UserFeedLabel {
  text: string;
  type: TagType;
}

export interface UserFeedTag {
  label1: UserFeedLabel;
  label2: UserFeedLabel;
}
