import React from 'react'
import Header from './Header'

function Layout({children}: any) {
  return (
    <html lang="en">
      <body className={`bg-black font-clash text-white flex flex-col`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}

export default Layout
