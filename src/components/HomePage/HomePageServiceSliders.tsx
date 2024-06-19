import React from 'react'
import HomePageServiceList from './HomePageServiceList'

function HomePageServiceSliders() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      

      <div
      className='whitespace-nowrap service opacity-30 z-0 absolute top-1/2 -translate-y-1/2 left-0 scale-110 -rotate-6 flex w-full  bg-amelia-green text-black '
      >
        <HomePageServiceList/>
        <HomePageServiceList/>
      </div>

      <div
      className='whitespace-nowrap service z-20 scale-110 rotate-6 flex w-full  bg-amelia-green text-black '
      >
        <HomePageServiceList/>
        <HomePageServiceList/>
      </div>
    </section>
  )
}

export default HomePageServiceSliders
