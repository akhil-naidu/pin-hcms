import { Block } from 'payload/types'

//schema
export const Home1_Help_Service_Block: Block = {
  slug: 'Home1_Help_Service',
  interfaceName: 'Home1_Help_Service',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Home1 Help Service',
    plural: 'Home1 Help Services',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
  ],
}
