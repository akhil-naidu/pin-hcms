import { Block } from 'payload/types'

//schema
export const Home1_Banner_Block: Block = {
  slug: 'Home1_Banner',
  interfaceName: 'Home1_Banner',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Home1 Banner Block',
    plural: 'Home1 Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'banner_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Author Image',
      admin: { description: 'Home banner image' },
    },
  ],
}
