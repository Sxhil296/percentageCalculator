import React from 'react'
import { GitHub, Percent } from 'react-feather'

const Header = () => {
  return (
    <header className='bg-white px-4 py-2 sm:py-4 fixed w-full top-0'>
        <div className='container mx-auto flex justify-between'>
        <div className='text-xl font-medium'><Percent className='inline'/> CALCULATOR.</div>
        <a href='https://github.com/Sxhil296/percentageCalculator' target='_blank'><GitHub /></a>
        </div>
    </header>
  )
}

export default Header