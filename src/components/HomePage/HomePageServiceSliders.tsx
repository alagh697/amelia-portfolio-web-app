import React from 'react'

function HomePageServiceSliders() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      

      <div
      className='opacity-30 z-0 absolute top-1/2 -translate-y-1/2 left-0 scale-110 -rotate-6 flex w-full  bg-amelia-green text-black '
      >
        <ul className='flex justify-center items-center gap-4 py-4'>
            <li
            className='service-title'
            >
                {`Development`}
            </li>
            <li
            className='service-title'
            >
                {`Development`}
            </li>
            <li
            className='service-title'
            >
                {`Development`}
            </li>
            <li
            className='service-title'
            >
                {`Development`}
            </li>
            <li
            className='service-title'
            >
                {`Development`}
            </li>
        </ul>
      </div>

      <div
      className='z-20 scale-110 rotate-6 flex w-full  bg-amelia-green text-black '
      >
        <ul className='flex justify-center items-center gap-4 py-4 list-disc'>
            <li
            className='service-title'
            >
                {`Branding`}
            </li>
            <li
            className='service-title'
            >
                {`UI/UX design`}
            </li>
           
            <li
            className='service-title'
            >
                {`Development`}
            </li>
            <li
            className='service-title'
            >
                {`Icon Design`}
            </li>
            <li
            className='service-title'
            >
                {`Logo design`}
            </li>
        </ul>
      </div>
    </section>
  )
}

export default HomePageServiceSliders
