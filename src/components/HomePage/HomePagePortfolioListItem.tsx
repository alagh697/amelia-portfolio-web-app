import Image from 'next/image'
import React from 'react'

function HomePagePortfolioListItem() {
  return (
    <li
    className='carousel-item flex-shrink-0 bg-[#222222] w-72 h-96 relative rounded-xl overflow-hidden'
    >
         <Image
         src={`/images/app.png`}
         alt='App'
         className='object-cover'
         fill
         />   
    </li>
  )
}

export default HomePagePortfolioListItem
