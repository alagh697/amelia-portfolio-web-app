import React from 'react'

function HomePageServiceList() {
  return (
    <ul className='service-slider flex justify-center items-center gap-4 py-4 list-disc'>
            <li
            className='service-title'
            >
                {`Branding`}
            </li>
            <li
            className='service-title'
            >
                {`UI/UX Design`}
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
                {`Logo Design`}
            </li>
        </ul>
  )
}

export default HomePageServiceList
