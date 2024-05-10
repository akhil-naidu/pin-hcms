'use client'

import { Hero_2, Media } from '@payload-types'
import Link from 'next/link'
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules'
//swiper style
import { Swiper, SwiperSlide } from 'swiper/react'

const HeroTwo = (Hero_2_data: Hero_2) => {
  return (
    <section className='banner-area banner-area3 pos-rel'>
      <div className='slider__active-3'>
        <div>
          <Swiper
            modules={[Pagination, Autoplay, EffectFade, A11y, Navigation]}
            slidesPerView={1}
            // slidespercolumn={1}
            pagination={{
              clickable: true,
              el: '.swiper-paginations',
            }}
            // paginationclickable={true.toString()}
            loop={true}
            effect={'fade'}
            autoplay={{
              delay: 2500,
            }}
            // Navigation arrows
            navigation={{
              nextEl: '.slider-button-prev',
              prevEl: '.slider-button-next',
            }}>
            {Hero_2_data?.hero?.slice(0, 3)?.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className='single-banner banner-overlay-3 single-banner-3 d-flex align-items-center banner-840'>
                    <div
                      className='banner-bg banner-bg3'
                      style={{
                        backgroundImage: `url(${(item?.hero_2_image as Media)?.url || ''})`,
                      }}></div>
                    <div className='container pos-rel'>
                      <div className='row align-items-center justify-content-center'>
                        <div className='col-xl-12 col-lg-8 col-md-9'>
                          <div className='banner-content banner-content3 text-center'>
                            <div
                              className='banner-meta-text bdevs-el-subtitle'
                              data-animation='fadeInUp'
                              data-delay='.3s'>
                              <span>{item?.sub_title}</span>
                            </div>
                            <h1
                              className='banner-title bdevs-el-title'
                              data-animation='fadeInUp'
                              data-delay='.5s'>
                              {item?.title_1} <br /> {item?.title_2}
                            </h1>
                            <div
                              className='banner-btn justify-content-center'
                              data-animation='fadeInUp'
                              data-delay='.7s'>
                              <Link
                                href='/contact'
                                className='fill-btn clip-btn bdevs-el-btn'>
                                {Hero_2_data?.button_one}
                              </Link>
                              <Link
                                href='/services'
                                className='skew-btn bdevs-el-sec-btn'>
                                {Hero_2_data?.button_two}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='banner-content3-round1 vert-move'></div>
                    <div className='banner-content3-round2 hori-move'></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='slider-nav'>
          <div className='slider-button-prev'>
            <i className='fal fa-long-arrow-left'></i>
          </div>
          <div className='slider-button-next'>
            <i className='fal fa-long-arrow-right'></i>
          </div>
        </div>

        <div className='slider-pagination slider1-pagination'></div>
      </div>
    </section>
  )
}

export default HeroTwo
