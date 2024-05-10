import { ContactIfoArea_2, Media } from '@payload-types'
import Link from 'next/link'

const ContactInfoArea = (ContactIfoArea_2_Data: ContactIfoArea_2) => {
  const contact_data = [
    {
      style: 'dot dot-1',
    },
    {
      style: 'dot dot-2 active',
    },
    {
      style: 'dot dot-3',
    },
    {
      style: 'dot dot-4',
    },
    {
      style: 'dot dot-5',
    },
  ]

  const contact__info = [
    {
      contact: 'tel:32622266600',
      icon: 'flaticon-telephone-call',
    },
    {
      contact: 'mailto:info@webdow.com',

      icon: 'flaticon-envelope',
    },
    {
      contact:
        'https://www.google.com/maps/search/12%2FA,+New+Boston+Hall/@42.5515021,-79.7879305,7z/data=!3m1!4b1',
      icon: 'flaticon-pin',
    },
  ]
  return (
    <section
      className='contact__area contact__bg pt-120 pb-90 wow fadeInUp'
      data-wow-duration='1.5s'
      data-wow-delay='.3s'
      data-background='assets/img/contact/map-bg.png'>
      <div className='container'>
        <div className='contact__info-box mb-120'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='contact__content'>
                <div className='section__title'>
                  <span className='sub-title'>
                    {ContactIfoArea_2_Data?.tag}
                  </span>
                  <h2 className='title'>{ContactIfoArea_2_Data?.title}</h2>
                </div>
                <p className='mb-45'>{ContactIfoArea_2_Data?.description}</p>
                <div className='contact__content-btn'>
                  <Link href='/contact' className='fill-btn'>
                    {ContactIfoArea_2_Data?.button_text}
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='coverage__map p-relative wow slideInUp'>
                <div className='dot-main'>
                  {ContactIfoArea_2_Data?.flag_images?.map((item, index) => (
                    <div className='dot-main-item' key={index}>
                      <div className={contact_data[index]?.style}>
                        <div className='dot-content p-relative'>
                          <div className='dot-inner'>
                            <img
                              src={(item?.flag_image as Media)?.url || ''}
                              alt='contact img'></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact__info'>
          <div className='row'>
            {ContactIfoArea_2_Data?.contact_information?.map((item, index) => (
              <div className='col-xl-4 col-lg-4 col-md-6' key={index}>
                <div className='contact__shadow'>
                  <div className='contact__info-item mb-30'>
                    <div className='contact__info-text'>
                      <span>{item?.title}</span>
                      <h3>
                        <Link href={contact__info[index]?.contact}>
                          {item?.sub_title}
                        </Link>
                      </h3>
                    </div>
                    <div className='contact__info-icon'>
                      <i className={contact__info[index]?.icon}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoArea
