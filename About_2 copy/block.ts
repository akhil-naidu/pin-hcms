import { Block } from 'payload/types'

export const About_2_Block: Block = {
  slug: 'About_2',
  interfaceName: 'About_2',
  labels: {
    singular: 'About_2 Block',
    plural: 'About_2 Blocks',
  },
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
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload Aboutus Image',
      },
    },
    {
      name: 'projects_done',
      label: 'Projects Done',
      type: 'number',
      required: true,
    },
    {
      name: 'star_rating',
      label: 'Star Rating',
      type: 'number',
      required: true,
    },
    {
      name: 'years_of_experience',
      label: 'Years of Experience',
      type: 'number',
      required: true,
    },
    {
      name: 'button_one',
      label: 'Button Text',
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
