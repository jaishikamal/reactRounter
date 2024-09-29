import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-black text-white flex items-end justify-between px-3 py-2'>
      <h1 className='text-2xl'>Demo</h1>
      <nav className='space-x-4'>

        <NavLink className={(e) =>
         { if (e.isActive) {
           return 'text-red-900'
          } else {
           return 'text-white-500'
          }
        }
        }
          to={'/about-page'}>About</NavLink>
        <Link
          to={'/contact-page'}>Contact</Link>
      </nav>
    </div>
  )
}

export default Header
