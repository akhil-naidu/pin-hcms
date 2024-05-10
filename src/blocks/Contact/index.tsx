import { ContactType } from '@payload-types'

import ContactFrom from '@blocks/Contact/contact-form'

const Contact = (data: ContactType) => {
  return (
    <main>
      <ContactFrom {...data} />
    </main>
  )
}

export default Contact
