import { Block } from 'payload/types'

export const BlogSectionTwo_Block: Block = {
  slug: 'BlogSection_2',
  // imageURL: '',
  interfaceName: 'BlogSection_2',
  labels: {
    singular: 'BlogSection_2 Block',
    plural: 'BlogSection_2 Blocks',
  },
  fields: [
    {
      name: 'tag',
      label: 'Tag',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'blogs',
      label: 'Blogs',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'blog_image',
          label: 'Blog Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload Blog Image',
          },
        },
        {
          name: 'date',
          label: 'Date',
          type: 'number',
          required: true,
        },
        {
          name: 'month',
          label: 'Month',
          type: 'text',
          required: true,
        },
        {
          name: 'number_of_comments',
          label: 'Number of Comments',
          type: 'number',
          required: true,
        },
        {
          name: 'author',
          label: 'Author',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
