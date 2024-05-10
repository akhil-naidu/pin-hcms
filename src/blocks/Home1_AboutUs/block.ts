import { Block } from 'payload/types'

//schema
export const Home1_AboutUs_Block: Block = {
  slug: 'Home1_AboutUs',
  interfaceName: 'Home1_AboutUs',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Home1 About us Block',
    plural: 'Home1 About us Blocks',
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
      name: 'AboutUsVideoUrl',
      label: 'About Us Video URL',
      type: 'text',
      required: true,
    },
    {
      name: 'tab',
      label: 'Tab',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'tabTitle',
          label: 'Tab title',
          type: 'text',
          required: true,
        },
        {
          name: 'tabDescription',
          label: 'Tab Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'tabUrl',
          label: 'Tab Url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
