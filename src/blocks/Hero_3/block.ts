import { Block } from 'payload/types'

export const HeroThree_Block: Block = {
  slug: 'heroThree',
  interfaceName: 'heroThree',
  imageURL: './page.PNG',
  labels: {
    singular: 'HeroThree Block',
    plural: 'HeroThree Blocks',
  },
  fields: [
    {
      name: 'hero',
      label: 'Hero',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'title_2',
          label: 'Title 2',
          type: 'text',
          required: true,
        },
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          required: true,
        },
        {
          name: 'hero_2_image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload Hero Image',
          },
        },
      ],
    },

    {
      name: 'button_one',
      label: 'Button One',
      type: 'text',
      required: true,
      admin: {
        description: 'Button One Name',
      },
    },
    {
      name: 'button_two',
      label: 'Button Two',
      type: 'text',
      required: true,
      admin: {
        description: 'Button Two Name',
      },
    },
  ],
}
