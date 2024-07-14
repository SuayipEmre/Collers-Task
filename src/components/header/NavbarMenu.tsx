
import React from 'react'
import SignUpNowButton from '../SignUpNowButton'
import MenuIcon from '@/icons/MenuIcon'
import CloseIcon from '@/icons/CloseIcon'


type Props = {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: (isOpen: boolean) => void
}
const NavbarMenu: React.FC<Props> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    return (
        <div >

            
            <ul className='hidden xl:flex items-center gap-10 '>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Products</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Solutions</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Pricing</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Resources</li>
                <li className='text-[#78350F] text-base leading-6 font-medium'>Log In</li>
                <SignUpNowButton />
            </ul>


            <div className='flex xl:hidden cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <MenuIcon />
            </div>

            {
                isMobileMenuOpen && <div className='flex absolute top-0 gap-10 right-0 z-10  p-20  flex-col  sm:w-[80%] md:w-[50%] xl:hidden bg-white shadow-black-strong '>
                    <ul className='flex flex-col gap-10'>
                        <li className='text-dark-blue text-base leading-6 font-medium'>Products</li>
                        <li className='text-dark-blue text-base leading-6 font-medium'>Solutions</li>
                        <li className='text-dark-blue text-base leading-6 font-medium'>Pricing</li>
                        <li className='text-dark-blue text-base leading-6 font-medium'>Resources</li>
                        <li className='text-dark-blue text-base leading-6 font-medium'>Log In</li>
                    </ul>
                    <SignUpNowButton  />

                    <div className='absolute top-10 right-10 cursor-pointer' onClick={() => setIsMobileMenuOpen(false)}>
                        <CloseIcon  />
                    </div>
                </div>
            }

        </div>
    )
}

export default NavbarMenu


