import { FunfactArea as FunfactAreaType } from '@payload-types'
import dynamic from 'next/dynamic'

const funFactList = [
  {
    icon: 'fal fa-globe',
  },
  {
    icon: 'fal fa-users',
  },
  {
    icon: 'fal fa-smile',
  },
  {
    icon: 'fal fa-truck',
  },
]

const Counter: any = dynamic(
  () => import('@/app/(app)/_components/common/counter/CountUpContent'),
  {
    ssr: false,
  },
)
const FunfactArea = (funFactData: FunfactAreaType) => {
  return (
    <section className='dp-funfact-area pt-120 pb-90'>
      <div className='container'>
        <div
          className='dp-funfactor-grid wow fadeInUp'
          data-wow-duration='1.5s'
          data-wow-delay='.3s'>
          {funFactData?.funfacts?.map((item, index) => (
            <div className='dp-funfact-wrapper mb-30' key={index}>
              <div className='dp-funfact-icon'>
                <i className={funFactList[index]?.icon}></i>
              </div>
              <div className='dp-funfact-content'>
                <h3 className='counter'>
                  <Counter number={item?.number}></Counter>
                </h3>
                <p>{item?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunfactArea
