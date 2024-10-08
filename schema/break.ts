import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      title: 'Break style',
      options: {
        list: [
          { title: 'Line break', value: 'lineBreak' },
          { title: 'Read more', value: 'readMore' },
          /* { title: "Page break", value: "pageBreak" },
          { title: "Section break", value: "sectionBreak" }, */
        ],
      },
    }),
  ],
});
