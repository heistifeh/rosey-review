import {defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'reviewerName',
      title: 'Reviewer name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviewerAvatar',
      title: 'Reviewer photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'meta',
      title: 'Reviewer meta',
      type: 'string',
      description: 'E.g., Verified user, Founder, etc.',
    }),
    defineField({
      name: 'verified',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Review body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                fields: [{name: 'href', type: 'url', title: 'URL'}],
              },
            ],
          },
        },
        {type: 'image', options: {hotspot: true}},
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'helpfulCount',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'response',
      type: 'object',
      fields: [
        {name: 'author', type: 'string'},
        {name: 'createdAt', type: 'datetime'},
        {name: 'body', type: 'text'},
      ],
    }),
  ],
})
