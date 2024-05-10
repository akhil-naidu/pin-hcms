import { ApproachArea_1, Media } from '@payload-types'

const ApproachArea = (ApproachArea_1_data: ApproachArea_1) => {
  return (
    <section className='approach__area fix grey-bg-4'>
      <div className='approach__img m-img'>
        <img
          src={(ApproachArea_1_data?.image as Media)?.url || ''}
          style={{ width: '100%', height: 'auto' }}
          alt='approach'
        />
      </div>
      <div className='container'>
        <div className='row g-0 justify-content-end'>
          <div className='col-lg-6'>
            <div
              className='approach__content wow fadeInUp'
              data-wow-duration='1.5s'
              data-wow-delay='.3s'>
              <div className='section__title mb-35'>
                <span className='sub-title'>{ApproachArea_1_data?.tag}</span>
                <h2 className='title'>{ApproachArea_1_data?.title}</h2>
              </div>
              <div className='approach__text'>
                <p>{ApproachArea_1_data?.description}</p>
                <ul>
                  {ApproachArea_1_data?.points?.map((item, index) => (
                    <li key={index}>
                      <i className='fal fa-check-circle'></i>
                      {item?.point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApproachArea
