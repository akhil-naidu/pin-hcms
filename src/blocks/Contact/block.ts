import { Block } from 'payload/types'

//schema
export const Contact_Block: Block = {
  slug: 'Contact',
  interfaceName: 'ContactType',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Contact Block',
    plural: 'Contact Blocks',
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
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'text',
      required: true,
    },
    {
      name: 'officeAddress',
      label: 'Office Address',
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
