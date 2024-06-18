import Link from 'next/link';
import React from 'react'
import SVG from 'react-inlinesvg';
import Nav from './Nav';

function Header() {
  return (
    <header
    className='w-screen py-5 bg-gradient-to-b from-black/20 via-black/20 to-transparent backdrop-blur-sm fixed top-0 left-0 z-[10]'
    >
      <div
      className='w-5/6 flex gap-16 justify-between mx-auto items-center'
      >
      {/* Logo */}
      <Link
      href={`/`}
      className=''
      >
      <SVG
        src="/next.svg"
        width={128}
        height="auto"
        title="React"
        className='fill-white hover:fill-amelia-green'
      />
      </Link>

      {/* Nav */}
      <Nav/>

      {/* Cta */}
      <div>
        <button
        className='cta'
        >
          {`Get in touch`}
        </button>
      </div>
      </div>
    </header>
  )
}

export default Header
