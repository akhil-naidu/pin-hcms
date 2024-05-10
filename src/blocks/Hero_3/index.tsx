'use client'

import { HeroThree } from '@payload-types'
import Link from 'next/link'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Hero_3 = (data: HeroThree) => {
  const { hero, button_one, button_two } = data
  return (
    <section className='banner-area banner-area1 pos-rel'>
      <div className='slider__active'>
        <div>
          <Swiper
            modules={[Autoplay, Navigation, EffectFade, Pagination]}
            slidesPerView={1}
            // slidespercolumn={1}
            pagination={{
              clickable: true,
            }}
            loop={true}
            effect={'fade'}
            autoplay={{
              delay: 5000,
            }}
            // Navigation arrows
            navigation={{
              nextEl: '.slider-button-next',
              prevEl: '.slider-button-prev',
            }}>
            {hero.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div>
                  <div className='single-banner banner-overlay single-banner-1 banner-830'>
                    <div
                      className='banner-bg banner-bg1 banner-bg1-1'
                      style={{
                        backgroundImage: `url(${item.hero_2_image.url})`,
                      }}></div>
                    <div className='container pos-rel'>
                      <div className='row align-items-center'>
                        <div className='col-lg-8'>
                          <div className='banner-content banner-content1 banner-content1-1'>
                            <div
                              className='banner-meta-text'
                              data-animation='fadeInUp'
                              data-delay='.3s'>
                              <span>{item.title}</span>
                            </div>
                            <h1
                              className='banner-title'
                              data-animation='fadeInUp'
                              data-delay='.5s'>
                              {item.title_2} <br /> {item.sub_title}
                            </h1>
                            <div
                              className='banner-btn'
                              data-animation='fadeInUp'
                              data-delay='.7s'>
                              <Link
                                href='/contact'
                                className='fill-btn clip-btn'>
                                {button_one}
                              </Link>
                              <Link className='skew-btn' href='/services'>
                                {button_two}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='slider-nav d-none d-md-block'>
        <div className='dp-nav-btn slider-button-prev'>
          <i className='far fa-angle-left'></i>
        </div>
        <div className='dp-nav-btn slider-button-next'>
          <i className='far fa-angle-right'></i>
        </div>
      </div>
      {/* If we need pagination  */}
      <div className='slider-pagination slider1-pagination'></div>
    </section>
  )
}

export default Hero_3
