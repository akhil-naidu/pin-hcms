import { ContactType } from '@payload-types'
import Link from 'next/link'

const Contact = (data: ContactType) => {
  const contactData = [
    {
      id: 1,
      icon: 'flaticon-telephone-call',
      contact: 'tel:32622266600',
      infoText: 'Call us now',
      other: '326 222 666 00',
    },
    {
      id: 2,
      icon: 'flaticon-envelope',
      contact: 'mailto:info@webdow.com',
      infoText: 'send email',
      other: 'info@webdow.com',
    },
    {
      id: 3,
      icon: 'flaticon-pin',
      contact:
        'https://www.google.com/maps/search/12%2FA,+New+Boston+Hall/@42.5515021,-79.7879305,7z/data=!3m1!4b1',
      infoText: 'visit office',
      other: 'New york, united states',
    },
  ]
  return (
    <div className='contact--wrapper mb-60'>
      <div className='section__title mb-45'>
        <span className='sub-title'>{data?.title}</span>
        <h2 className='title'>{data?.subtitle}</h2>
      </div>
      <div className='contact-info mr-20'>
        <div className='single-contact-info d-flex align-items-center'>
          <div className='contact-info-icon'>
            <Link href='#'>
              <i className='flaticon-telephone-call'></i>
            </Link>
          </div>
          <div className='contact-info-text'>
            <span>Call us now</span>
            <h5>
              <div>{data?.phoneNumber}</div>
            </h5>
          </div>
        </div>
        <div className='single-contact-info d-flex align-items-center'>
          <div className='contact-info-icon'>
            <Link href='#'>
              <i className='flaticon-envelope'></i>
            </Link>
          </div>
          <div className='contact-info-text'>
            <span>Send Mail</span>
            <h5>
              <div>{data?.email}</div>
            </h5>
          </div>
        </div>
        <div className='single-contact-info d-flex align-items-center'>
          <div className='contact-info-icon'>
            <Link href='#'>
              <i className='flaticon-pin'></i>
            </Link>
          </div>
          <div className='contact-info-text'>
            <span>Visit office</span>
            <h5>
              <div>{data?.officeAddress}</div>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
