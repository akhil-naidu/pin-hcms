import { BlogSection_2, Media } from '@payload-types'
import Link from 'next/link'

const BlogSectionTwo = (BlogSection_2Data: BlogSection_2) => {
  return (
    <section
      className='blog pt-120 pb-55 grey-bg-4 wow fadeInUp'
      data-wow-duration='1.5s'
      data-wow-delay='.3s'>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-8'>
            <div className='section__title text-center mb-30'>
              <span className='sub-title'>{BlogSection_2Data?.tag}</span>
              <h2 className='title'>{BlogSection_2Data?.title}</h2>
            </div>
          </div>
        </div>
        <div className='blog-two mt-45'>
          <div className='row'>
            {BlogSection_2Data?.blogs?.slice(0, 3).map((item, index) => (
              <div className='col-xl-4 col-lg-4 col-md-6' key={index}>
                <div
                  className='blog__item mb-60 w-img wow fadeInUp'
                  data-wow-duration='1.5s'
                  data-wow-delay='.3s'>
                  <div className='blog__item-img mb-35'>
                    <Link href={`/blog-details/${index + 1}`}>
                      <img
                        src={(item?.blog_image as Media)?.url || ''}
                        alt='Blog-Img'
                        style={{ width: '100%', height: 'auto' }}></img>
                    </Link>
                    <div className='blog__meta dp-blog-meta1'>
                      <span>
                        <Link href={`/blog-details/${index + 1}`}>
                          <i className='fas fa-comments'> </i>
                          {item?.number_of_comments > 0
                            ? `${item?.number_of_comments} Comments`
                            : `${item?.number_of_comments} Comment`}
                        </Link>
                      </span>
                      <span>
                        {' '}
                        <Link href={`/blog-details/${item.id}`}>
                          <i className='fas fa-user'></i> {item?.author}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className='blog__item-date'>
                    <span>
                      <b>{item.date} </b>
                      {item?.month}
                    </span>
                  </div>
                  <div className='blog__item-content'>
                    <h2>
                      <Link href={`/blog-details/${index + 1}`}>
                        {item?.title}
                      </Link>
                    </h2>
                    <div className='blog__item-text'>
                      <p>{item?.sub_title}</p>
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

export default BlogSectionTwo
