'use client'

// swiper style
import { BlogType, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import 'react-modal-video/css/modal-video.min.css'

import VideoModal from '@blocks/components/modal-video'
import Pagination_Data from '@blocks/components/pagination'
import useModal from '@blocks/components/use-modal'

const PostArea = (data: BlogType) => {
  const { isVideoOpen, setIsVideoOpen } = useModal()

  return (
    <>
      <div className='col-lg-8'>
        <div className='postbox__wrapper pb-60'>
          <h3>Bloggggggggg</h3>
          {data?.blogs?.map(item => (
            <div className='postbox__item format-image mb-70' key={item.id}>
              <div className='postbox__thumb w-img mb-35'>
                <>
                  <div>
                    <div className='postbox__slider-item'>
                      <Image
                        src={(item?.blogImage as Media)?.url as string}
                        alt='Blog'
                        height={450}
                        width={830}
                      />
                    </div>
                  </div>
                  {/* <div className='postbox-nav'>
                      <button className='postbox-slider-button-next'>
                        <i className='fas fa-long-arrow-right'></i>
                      </button>
                      <button className='postbox-slider-button-prev'>
                        <i className='fas fa-long-arrow-left'></i>
                      </button>
                    </div> */}
                </>

                {/* {item.image && (
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      src={item.image}
                      alt='Blog'
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                )}
                {item.videoPlay && (
                  <button
                    type='button'
                    className='play-btn popup-video'
                    onClick={() => setIsVideoOpen(true)}>
                    <i className='fas fa-play'></i>
                  </button>
                )} */}
              </div>
              <div className='postbox__content'>
                <div className='postbox__meta mb-10'>
                  <div className='blog__meta'>
                    <span>
                      <Link href='/blog'>
                        <i className='fas fa-user'></i> Rahaman
                      </Link>
                    </span>
                    <span>
                      <i className='fas fa-alarm-clock'></i> today
                    </span>
                    {/* <span>
                      <Link href={`/blog-details/${item.id}`}>
                        <i className={item.commentIcon}></i>
                        {item.comments > 0
                          ? `${item.comments} Comments`
                          : `${item.comments} Comment`}
                      </Link>
                    </span> */}
                  </div>
                </div>
                <h3 className='postbox__title mb-20'>
                  <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                </h3>
                <div className='postbox__text mb-25'>
                  <p>{item.description}</p>
                </div>
                <div className='postbox__read-more'>
                  <Link
                    href={`/blog-details/${item.id}`}
                    className='fill-btn clip-btn'>
                    read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <Pagination_Data />
        </div>
      </div>
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'J72oMj5mWLw'}
      />
    </>
  )
}

export default PostArea
