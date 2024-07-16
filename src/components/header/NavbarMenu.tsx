import React from 'react'
import SignUpNowButton from '../SignUpNowButton'
import MenuIcon from '@/icons/MenuIcon'
import CloseIcon from '@/icons/CloseIcon'
import { MenuItems } from './constants'


type Props = {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: (isOpen: boolean) => void
}



const NavbarMenu: React.FC<Props> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    return (
        <div className='' >

            {/*desktop menu */}
            <ul className={`hidden xl:flex items-center gap-10 `}>
                {
                    MenuItems.map(item => <li key={item.id} className='text-[#78350F] text-base leading-6 font-medium'>{item.itemText}</li>)
                }

                <SignUpNowButton />
            </ul>


            <div className={`flex xl:hidden cursor-pointer ${isMobileMenuOpen && 'hidden'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <MenuIcon />
            </div>


            {/*mobile menu*/}
            {
                isMobileMenuOpen && <div className='flex absolute top-0 gap-10 p-4  right-0 z-10   flex-col w-[80%] sm:w-[50%]   xl:hidden bg-white shadow-black-strong '>
                    <div className='flex items-center justify-between ' onClick={() => setIsMobileMenuOpen(false)}>
                        <p className='text-4xl font-bold leading-[35.2px] text-left text-[#78350F]'>Collers</p>
                        <CloseIcon />
                    </div>
                    <ul className='flex flex-col gap-10'>
                        {
                            MenuItems.map(item => <li key={item.id} className='text-dark-blue text-base leading-6 font-medium'>{item.itemText}</li>)
                        }
                    </ul>
                    <SignUpNowButton />


                </div>
            }

        </div>
    )
}

export default NavbarMenu


