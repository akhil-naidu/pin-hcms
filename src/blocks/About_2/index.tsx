import { About_2 } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs_2 = (data: About_2) => {
  const {
    title,
    sub_title,
    description,
    button_one,
    button_two,
    image,
    projects_done,
    star_rating,
    years_of_experience,
  } = data

  return (
    <section className='about__3 about__gray-bg p-relative pt-120 pb-60'>
      <div className='container'>
        <div
          className='row align-items-center wow fadeInU'
          data-wow-duration='1.5s'
          data-wow-delay='.3s'>
          <div className='col-xl-6 col-lg-6'>
            <div className='about__3-img-wrapper p-relative mb-60'>
              <div className='about__3-top w-img'>
                <Image
                  //@ts-ignore
                  src={image?.url}
                  width={100}
                  height={100}
                  alt={'About'}
                />
              </div>
              <div className='about__3-main w-img'>
                <Image
                  //@ts-ignore
                  src={image?.url}
                  width={100}
                  height={460}
                  objectFit='cover'
                  alt={'About'}
                />
              </div>
              <div className='about__3-text clip-box-sm'>
                <span>
                  <i className='far fa-trophy-alt'></i>
                </span>
                <h4 className='about__3-title'>
                  {years_of_experience} Years of experience
                </h4>
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6'>
            <div className='about__3-content mb-60'>
              <div className='section__title mb-30'>
                <span className='sub-title'>{title}</span>
                <h2 className='title'>
                  {sub_title} <br /> servicing, maintenance.
                </h2>
              </div>
              <div className='about__3-content-inner p-relative'>
                <div className='about__3-content-left'>
                  <p>{description}</p>

                  <div
                    className='about__3-content-btn mt-35'
                    style={{ display: 'flex' }}>
                    <Link href='/about-us' className='skew-btn'>
                      {button_one}
                    </Link>

                    <Link href='/about-us' className='fill-btn clip-btn'>
                      {button_two}
                    </Link>
                  </div>
                </div>
                <div className='about__3-content-right'>
                  <div className='about__3-shadow'>
                    <div className='about__3-content-num'>
                      <h2>{projects_done}</h2>
                      <h6>Project done</h6>
                    </div>
                  </div>
                  <div className='about__3-shadow'>
                    <div className='about__3-content-num'>
                      <h2>{star_rating}</h2>
                      <h6>star ratings</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs_2
