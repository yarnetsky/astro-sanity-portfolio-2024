// ./schemaTypes/youTubeType/index.ts

import { defineType, defineField } from 'sanity';
import { PlayIcon } from '@sanity/icons';
import { YouTube } from './YouTubePreview';

export const youTubeType = defineType({
  name: 'youTube',
  type: 'object',
  title: 'YouTube Embed',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'YouTube video title',
    }),
    defineField({
      name: 'id',
      type: 'id',
      title: 'YouTube video id',
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
  components: {
    preview: YouTube,
  },
});
