import { Block } from 'payload/types'

export const Hero_2_Block: Block = {
  slug: 'Hero_2',
  interfaceName: 'Hero_2',
  //   imageURL: './page.PNG',
  labels: {
    singular: 'Hero_2 Block',
    plural: 'Hero_2 Blocks',
  },
  fields: [
    {
      name: 'hero',
      label: 'Hero',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'sub_title',
          label: 'Sub Title',
          type: 'text',
          required: true,
        },
        {
          name: 'title_1',
          label: 'Title 1',
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
          name: 'hero_2_image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload Image',
          },
        },
      ],
    },

    {
      name: 'button_one',
      label: 'Button One',
      type: 'text',
      required: true,
    },
    {
      name: 'button_two',
      label: 'Button Two',
      type: 'text',
      required: true,
    },
  ],
}
