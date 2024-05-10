import { Block } from 'payload/types'

export const ApproachArea_Block: Block = {
  slug: 'ApproachArea_1',
  interfaceName: 'ApproachArea_1',
  labels: {
    singular: 'ApproachArea_1 Block',
    plural: 'ApproachArea_1 Blocks',
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
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'points',
      label: 'Points',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'point',
          label: 'Point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload Image',
      },
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
    },
  ],
}
