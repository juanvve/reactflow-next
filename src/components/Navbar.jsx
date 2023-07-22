import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link
            className='navbar-brand'
            href='/'
          >
            ReacFlow Next13
          </Link>
          <div
            className='collapse navbar-collapse'
            id='navbarNav'
          >
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  aria-current='page'
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  href='/about'
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  href='/services'
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
