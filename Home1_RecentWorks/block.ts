import { Block } from 'payload/types'

//schema
export const Home1_RecentWork_Block: Block = {
  slug: 'Home1_RecentWork',
  interfaceName: 'Home1_RecentWork',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Home1 Recent work Block',
    plural: 'Home1 Recent work Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Sub title',
      type: 'text',
      required: true,
    },

    {
      name: 'gallery',
      label: 'Gallery',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          label: 'Sub title',
          type: 'text',
          required: true,
        },
        {
          name: 'gallery_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Gallery Image',
          admin: { description: 'Gallery image' },
        },
        {
          name: 'url',
          label: 'Url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
