import { Block } from 'payload/types'

export const FooterThree_Block: Block = {
  slug: 'Footer_3',
  // imageURL: '',
  interfaceName: 'Footer_3',
  labels: {
    singular: 'Footer_3 Block',
    plural: 'Footer_3 Blocks',
  },
  fields: [
    {
      name: 'heading_1',
      label: 'Heading 1',
      type: 'text',
      required: true,
    },
    {
      name: 'description_1',
      label: 'Description 1',
      type: 'text',
      required: true,
    },
    {
      name: 'heading_2',
      label: 'Heading 2',
      type: 'text',
      required: true,
    },
    {
      name: 'links_1',
      label: 'Links 1',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'links_2',
      label: 'Links 2',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'heading_3',
      label: 'Heading 3',
      type: 'text',
      required: true,
    },
    {
      name: 'description_2',
      label: 'Description 2',
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
      name: 'heading_4',
      label: 'Heading 4',
      type: 'text',
      required: true,
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      required: true,
      fields: [
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
      ],
    },
    {
      name: 'links_3',
      label: 'Links 3',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footer_image',
      label: 'Footer Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload Footer Image',
      },
    },
    {
      name: 'copyright_text',
      label: 'Copyright Text',
      type: 'text',
      required: true,
    },
    {
      name: 'copyright_text_link',
      label: 'Copyright Text Link',
      type: 'text',
      required: true,
    },
    {
      name: 'copyright_year',
      label: 'Copyright Year',
      type: 'number',
      required: true,
    },
  ],
}
