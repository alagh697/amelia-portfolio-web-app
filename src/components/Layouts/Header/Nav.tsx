import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className="flex flex-1">
      <ul className="flex flex-1 gap-5 items-center ">
        <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Home`}
            </Link>
        </li>
        <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Home`}
            </Link>
        </li>
        <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Home`}
            </Link>
        </li>
        <li>
            <Link
            href={`/`}
            className='nav-link'
            >
            {`Home`}
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
