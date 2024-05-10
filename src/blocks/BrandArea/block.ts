import { Block } from 'payload/types'

export const BrandArea_Block: Block = {
  slug: 'BrandArea',
  // imageURL: '',
  interfaceName: 'BrandArea',
  labels: {
    singular: 'BrandArea Block',
    plural: 'BrandArea Blocks',
  },
  fields: [
    {
      name: 'brands',
      label: 'Brands',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'brand_image',
          label: 'Brand Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Upload Brand Image',
          },
        },
      ],
    },
  ],
}
