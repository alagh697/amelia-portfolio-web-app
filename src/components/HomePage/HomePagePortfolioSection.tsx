"use client"
import React, { useEffect, useRef } from 'react'
import HomePagePortfolioListItem from './HomePagePortfolioListItem'
import HomePageServiceList from './HomePageServiceList'

function HomePagePortfolioSection() {
  const portfolioRef = useRef<any>(null);
  const isInverted = useRef(false);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
      const portfolioSection = portfolioRef.current;

      if (!portfolioSection) return;

      const handleScroll = (e: WheelEvent) => {
          if (!isInverted.current) return;

          const maxScrollLeft = portfolioSection.scrollWidth - portfolioSection.clientWidth;

          // Prevent the default vertical scroll behavior
          e.preventDefault();

          // Scroll horizontally instead
          portfolioSection.scrollLeft += e.deltaY;

          // Check if the user has scrolled past the end or beginning
          if (portfolioSection.scrollLeft <= 0 || portfolioSection.scrollLeft >= maxScrollLeft) {
              isInverted.current = false;
          }
      };

      observerRef.current = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      isInverted.current = true;
                  } else {
                      isInverted.current = false;
                  }
              });
          },
          { threshold: 0.1 } // Adjust this threshold as needed
      );

      observerRef.current.observe(portfolioSection);
      portfolioSection.addEventListener('wheel', handleScroll);

      // Cleanup the event listener and observer on unmount
      return () => {
          portfolioSection.removeEventListener('wheel', handleScroll);
          observerRef.current?.unobserve(portfolioSection);
      };
  }, []);

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
      ref={portfolioRef}
      className=' flex gap-3 overflow-hidden whitespace-nowrap items-center h-[80vh]'
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
