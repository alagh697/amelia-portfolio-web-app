import React from 'react'
import HomePagePortfolioListItem from './HomePagePortfolioListItem'
import HomePageServiceList from './HomePageServiceList'

function HomePagePortfolioSection() {
  return (
    <section
    className="bg-[#111111] w-full py-14 overflow-hidden
    flex flex-col gap-12
    "
    >
        {/* Section header */}
      <div
      className='w-5/6 mx-auto flex justify-between items-center'
      >
        <div className='flex flex-col gap-2'>
            <h2 className='text-amelia-green '>
                {`Portfolio`}
            </h2>

            <h3 className='text-4xl font-semibold'>
                {`Selected works`} <br/>
                {`2020-2022`}
            </h3>
        </div>

        <div className='flex flex-col gap-4'>
            <p>
                {`Check out more`} <br/>
                {`portfolios I've worked on`}
            </p>

            <button
            className='cta'
            >
                {`View more`}
            </button>
        </div>
      </div>

      {/* Project list */}
      <ul
      className='carousel flex gap-3 '
      >
        <HomePagePortfolioListItem/>
        <HomePagePortfolioListItem/>
        <HomePagePortfolioListItem/>
        <HomePagePortfolioListItem/>
        <HomePagePortfolioListItem/>
        <HomePagePortfolioListItem/>
      </ul>

      <div
      className='z-20 scale-110 flex w-full  bg-amelia-green text-black 
      whitespace-nowrap service
      '
      >
        <HomePageServiceList/>
        <HomePageServiceList/>
      </div>
    </section>
  )
}

export default HomePagePortfolioSection
