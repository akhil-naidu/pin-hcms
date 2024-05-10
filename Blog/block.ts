import { Block } from 'payload/types'

//schema
export const Blog_Block: Block = {
  slug: 'Blog',
  interfaceName: 'BlogType',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Blog Block',
    plural: 'Blog Blocks',
  },
  fields: [
    {
      name: 'blogs',
      label: 'Blogs',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },

        {
          name: 'blogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Blog Thumbnail Image',
          admin: { description: 'select image in all blogs page' },
        },
      ],
    },
  ],
}
