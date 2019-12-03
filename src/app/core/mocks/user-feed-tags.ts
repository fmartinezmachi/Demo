import { TagType } from '@coreModels/tag-type';

export const tags = {
  level: [
    {
      label1: { text: '75', type: TagType.Success },
      label2: { text: 'Changes', type: TagType.Regular },
    },
    {
      label1: { text: '8', type: TagType.Success },
      label2: { text: 'Repor', type: TagType.Regular },
    },
    {
      label1: { text: '5', type: TagType.Regular },
      label2: { text: 'News', type: TagType.Regular },
    },
    {
      label1: { text: '0', type: TagType.Regular },
      label2: { text: 'Neg', type: TagType.Regular },
    },
  ],
  squad: [
    {
      label1: { text: 'Squad', type: TagType.Regular },
      label2: { text: '8', type: TagType.Success },
    },
    {
      label1: { text: 'UK', type: TagType.Regular },
      label2: { text: '8', type: TagType.Success },
    },
  ],
  location: [
    {
      label1: { text: '275', type: TagType.Success },
      label2: { text: 'Changes', type: TagType.Regular },
    },
    {
      label1: { text: '28', type: TagType.Success },
      label2: { text: 'Repor', type: TagType.Regular },
    },
    {
      label1: { text: '51', type: TagType.Regular },
      label2: { text: 'News', type: TagType.Regular },
    },
    {
      label1: { text: '18', type: TagType.Warn },
      label2: { text: 'Neg', type: TagType.Regular },
    },
  ],
};
