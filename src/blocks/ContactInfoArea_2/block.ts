import { Block } from 'payload/types'

export const ContactInfoArea_2_Block: Block = {
  slug: 'ContactInfoArea_2',
  // imageURL: '',
  interfaceName: 'ContactIfoArea_2.',
  labels: {
    singular: 'ContactIfoArea_2 Block',
    plural: 'ContactIfoArea_2 Blocks',
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
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'flag_images',
      label: 'Flag Images',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'flag_image',
          label: 'Flag Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Flag image',
          },
        },
      ],
    },
    {
      name: 'contact_information',
      label: 'Contact Information',
      type: 'array',
      required: true,
      fields: [
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
