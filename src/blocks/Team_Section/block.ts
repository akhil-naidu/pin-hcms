import { Block } from 'payload/types'

//schema
export const Home1_Team_section_Block: Block = {
  slug: 'Home1_Team_section',
  interfaceName: 'Home1_Team_section',
  // imageURL: './page.PNG',
  labels: {
    singular: 'Home1 Team section Block',
    plural: 'Home1 Team section Blocks',
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
      name: 'team',
      label: 'Team',
      type: 'array',
      fields: [
        {
          name: 'teamMemberImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Author Image',
          admin: { description: 'team member picture' },
        },
        {
          name: 'role',
          label: 'Role',
          type: 'text',
          required: true,
        },
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'socialMedia',
          label: 'Social Media',
          type: 'array',
          fields: [
            {
              name: 'socialMediaName',
              label: 'Social Media Name',
              type: 'text',
              required: true,
              admin: { description: 'Add names in short form ex: Facebook-Fb' },
            },
            {
              name: 'socialMediaLink',
              label: 'Social Media url',
              type: 'text',
              required: true,
              admin: { description: 'Add your social media url here.' },
            },
          ],
        },
      ],
    },
  ],
}
