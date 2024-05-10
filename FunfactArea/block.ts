import { Block } from 'payload/types'

export const FunfactArea_Block: Block = {
  slug: 'FunfactArea',
  // imageURL: '',
  interfaceName: 'FunfactArea',
  labels: {
    singular: 'FunfactArea Block',
    plural: 'FunfactArea Blocks',
  },
  fields: [
    {
      name: 'funfacts',
      label: 'Funfacts',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'number',
          label: 'Number',
          type: 'number',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
