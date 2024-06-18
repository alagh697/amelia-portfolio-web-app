import HomePageHeroSection from '@/components/HomePage/HomePageHeroSection'
import HomePagePortfolioSection from '@/components/HomePage/HomePagePortfolioSection'
import HomePageServiceSliders from '@/components/HomePage/HomePageServiceSliders'
import React from 'react'

function HomePageView() {
  return (
    <>
     <HomePageHeroSection/> 
     <HomePageServiceSliders/>
     <HomePagePortfolioSection/>
    </>
  )
}

export default HomePageView
