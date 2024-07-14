import React from 'react'
import NavbarMenu from './NavbarMenu'

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4  xl:px-20 xl:py-6'>
            <p className=' text-4xl font-bold leading-[35.2px] text-left text-[#78350F]'>Collers</p>
            <NavbarMenu />
        </header>
    )
}

export default Header