import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='2xl:bg-pink-600'>
      <div>
        <NavLink to={'page-1'}>page1</NavLink>
        <NavLink to={'page-2'}>Page2</NavLink>
      </div>
      <h1>jsjkjskksj</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, sint nostrum consequatur maxime aperiam corrupti ad ratione ab repellat, officiis nisi accusamus, hic quas minima laboriosam maiores quia. Officia alias excepturi aspernatur soluta quod?</p>
      <Outlet />
    </div>
  )
}

export default Homepage
