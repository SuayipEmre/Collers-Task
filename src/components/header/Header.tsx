import React from 'react'
import NavbarMenu from './NavbarMenu'

const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 h-[67px]'>
            <p className='font-roboto text-4xl font-bold leading-[35.2px] text-left text-[#78350F]'>Collers</p>
            <NavbarMenu />
        </div>
    )
}

export default Header