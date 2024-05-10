'use client'

import { ContactType } from '@payload-types'

import ContactForm from '@blocks/components/contact-form'

import Contact from './contact'

const ContactFrom = (data: ContactType) => {
  return (
    <section
      className='contact-area contact--area pt-120 pb-110 wow fadeInUp'
      data-wow-duration='1.5s'
      data-wow-delay='.3s'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-5 col-xl-6 col-lg-5'>
            <Contact {...data} />
          </div>
          <div className='col-xxl-7 col-xl-6 col-lg-7'>
            <div className='contact-form mb-60'>
              <ContactForm />
              <p className='ajax-response'></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFrom
