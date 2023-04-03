import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {
  return (
    <div className=' flex justify-center p-4 dark:bg-gray-400 bg-amber-100 lg:text-lg'>
        <NavbarItems title='Trending' params='fetchTrending'></NavbarItems>
        <NavbarItems title='Top Rated' params='fetchTopRated'></NavbarItems>
    </div>
  )
}
