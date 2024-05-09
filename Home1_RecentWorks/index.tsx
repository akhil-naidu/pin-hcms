'use client'

import { Home1_RecentWork, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
//swiper style
import { Swiper, SwiperSlide } from 'swiper/react'

const Home1RecentWorks = (data: Home1_RecentWork) => {
  return (
    <section className='dp-gallery-area grey-bg-3 pt-120 pb-120'>
      <div className='container'>
        <div
          className='row align-items-center wow fadeInUp'
          data-wow-duration='1.5s'
          data-wow-delay='.3s'>
          <div className='col-xl-7 col-lg-8 col-12'>
            <div className='section__title gallery-section-title mb-55'>
              <span className='sub-title'>{data?.title}</span>
              <h2 className='title'>{data?.subtitle}</h2>
            </div>
          </div>
          <div className='col-xl-5 col-lg-4 col-12'>
            <div className='services-two-nav dp-gallery-nav text-end'>
              <div className='services-button-prev'>
                <i className='fas fa-long-arrow-left'></i>
              </div>
              <div className='services-button-next'>
                <i className='fas fa-long-arrow-right'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='dp-gallery-active wow fadeInUp'
        data-wow-duration='1.5s'
        data-wow-delay='.3s'>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            // infinite='false'
            centeredSlides={true}
            autoplay={{
              delay: 3000,
            }}
            // If we need pagination
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            // Navigation arrows
            navigation={{
              nextEl: '.services-button-next',
              prevEl: '.services-button-prev',
            }}
            // And if we need scrollbar
            scrollbar={{
              el: '.swiper-scrollbar',
              //   dynamicBullets: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}>
            {data?.gallery?.slice(0, 5).map(item => (
              <SwiperSlide key={item.id}>
                <div>
                  <div className='dp-single-gallery'>
                    <div className='dp-gallery-thumb'>
                      <Image
                        src={(item?.gallery_image as Media)?.url as string}
                        alt='gallery-image'
                        height={450}
                        width={570}
                      />
                    </div>
                    <div className='dp-gallery-content'>
                      <div className='dp-gallery-content-text'>
                        <h4 className='dp-gallery-title'>
                          <Link href={item?.url}>{item.title}</Link>
                        </h4>
                        <span>{item?.subtitle}</span>
                      </div>
                      <div className='dp-gallery-link'>
                        <Link href={item?.url}>
                          <i className='fal fa-long-arrow-right'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Home1RecentWorks
