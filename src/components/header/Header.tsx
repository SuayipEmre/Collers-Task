"use client"
import React, { useState } from 'react'
import NavbarMenu from './NavbarMenu'


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    return (
        <header className='flex items-center justify-between p-4  xl:px-20 xl:py-6 relative'>
            {!isMobileMenuOpen && <p className=' text-4xl font-bold leading-[35.2px] text-left text-[#78350F]'>Collers</p>}
            <NavbarMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </header>
    )
}

export default Header