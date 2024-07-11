import MenuIcon from '@/icons/MenuIcon'
import React from 'react'
import SignUpNowButton from '../SignUpNowButton'

const NavbarMenu = () => {
    return (
        <div>

            <ul className='hidden md:flex items-center gap-10 '>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Products</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Solutions</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Pricing</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Resources</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Log In</li>
                <SignUpNowButton />
            </ul>

            <div className='flex md:hidden'>
                <MenuIcon />
            </div>
        </div>
    )
}

export default NavbarMenu


