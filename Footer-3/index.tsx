'use client'

import { Footer_3, Media } from '@payload-types'
import Link from 'next/link'

const FooterThree = (Footer_3Data: Footer_3) => {
  const listOfIcons = [
    {
      href: 'https://www.facebook.com/',
      icon: 'fab fa-facebook-f',
    },
    {
      href: 'https://twitter.com/',
      icon: 'fab fa-twitter',
    },
    {
      href: 'https://www.behance.net/',
      icon: 'fab fa-behance',
    },
    {
      href: 'https://www.youtube.com/',
      icon: 'fab fa-youtube',
    },
  ]
  const handleSubmit = (event: any) => {
    event.preventDefault()
  }
  return (
    <footer>
      <section className='footer-area footer-area1 footer-area1-bg pt-100 pb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-6'>
              <div className='footer-widget footer1-widget1 mb-50 pr-20'>
                <div className='footer-widget-title'>
                  <h4>{Footer_3Data?.heading_1}</h4>
                </div>
                <p className='mb-40'>{Footer_3Data?.description_1}</p>
                <div className='footer-social-link'>
                  <ul>
                    {listOfIcons.map((item, index) => (
                      <li key={index}>
                        <Link href={listOfIcons[index]?.href}>
                          <i className={listOfIcons[index]?.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-6'>
              <div className='footer-widget footer1-widget2 mb-50 pl-10'>
                <div className='footer-widget-title'>
                  <h4>{Footer_3Data?.heading_2}</h4>
                </div>
                <div className='footer-widget-link'>
                  <ul>
                    {Footer_3Data?.links_1?.map((link, index) => (
                      <li key={index}>
                        <Link href='/about-us'>{link?.link}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {Footer_3Data?.links_2.map((link, index) => (
                      <li key={index}>
                        <Link href='/career'>{link?.link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-6'>
              <div className='footer-widget footer1-widget3 mb-50 pr-45'>
                <div className='footer-widget-title'>
                  <h4>{Footer_3Data?.heading_3}</h4>
                </div>
                <p className='mb-20'>{Footer_3Data?.description_2}</p>
                <form
                  onSubmit={handleSubmit}
                  action='#'
                  className='subscribe-form subscribe-form-footer1'>
                  <div className='s-clip p-relative s-input mb-10'>
                    <input type='text' placeholder='Enter your email' />
                    <i className='fas fa-envelope'></i>
                  </div>
                  <button type='submit'>{Footer_3Data?.button_text}</button>
                </form>
              </div>
            </div>
            <div className='col-lg-4 col-xl-3 col-md-6 col-sm-6'>
              <div className='footer-widget footer1-widget4 mb-50'>
                <div className='footer-widget-title'>
                  <h4>{Footer_3Data?.heading_4}</h4>
                </div>
                <div className='footer-photo-gallery'>
                  {Footer_3Data?.images?.map((image, index) => (
                    <div className='footer-photo-item' key={index}>
                      <Link href={`/portfolio-details/${index + 1}`}>
                        <img
                          src={(image?.image as Media)?.url || ''}
                          style={{ width: '100%', height: 'auto' }}
                          alt='gallery'
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='footer__bottom-area copy-bg-1 p-relative'>
        <div className='footer-menu-area position p-absolute'>
          <div className='container'>
            <div className='red-bg clip-box-xs'>
              <div className='footer-menu-box'>
                <div className='row align-items-center'>
                  <div className='col-xxl-7 col-lg-5'>
                    <div className='footer-menu mb-15'>
                      <nav>
                        <ul>
                          {Footer_3Data?.links_3?.map((link, index) => (
                            <li key={index}>
                              <Link href='#'>{link?.link}</Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className='col-xxl-5 col-lg-7'>
                    <div className='footer-brand m-img mb-15 text-center text-lg-end'>
                      <img
                        src={(Footer_3Data?.footer_image as Media)?.url || ''}
                        alt='footer icon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copy-right-area'>
          <div className='container'>
            <div className='copy-right-text text-center'>
              <p>
                {Footer_3Data?.copyright_text}{' '}
                <Link href='https://themeforest.net/user/bdevs/portfolio?gclid=EAIaIQobChMIhYCnudmz_wIVWRxyCh2NoQvLEAAYASAAEgJTaPD_BwE'>
                  {Footer_3Data?.copyright_text_link}
                </Link>{' '}
                - {Footer_3Data?.copyright_year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterThree
