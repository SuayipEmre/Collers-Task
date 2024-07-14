import { DesktopBacklights, MobileBacklights } from '@/icons/Backlights'
import React from 'react'
import ProductCard from '../ProductCard'
import FirstImage from '@/assets/product-cart-image-first.jpeg'
import SecondImage from '@/assets/product-cart-image-second.jpeg'
import ThirdImage from '@/assets/product-cart-image-third.jpeg'
import SignUpNowButton from '../SignUpNowButton'

const BestOfBestContent = () => {
  return (
    <div className='w-screen flex items-center justify-center bg-dark-blue xl:p-20 xl:gap-20 '>
      <div className='2xl:w-full relative  flex items-center flex-col justify-center gap-4 p-4 z-50'>

        <div className='gap-8 flex flex-col items-center 2xl:flex-row 2xl:w-full 2xl:justify-between   '>
          <p className='font-bold text-[32px] leading-[35.2px] text-white '>The best of the best</p>

          <SignUpNowButton isWhiteBorder />
        </div>

        <div className='relative  flex flex-col items-center 2xl:items-start 2xl:w-full  z-10 '>

          <div className='flex flex-col  justify-between items-center xl:flex-row xl:flex-wrap  w-full xl:gap-12  z-50 '>
            <ProductCard image={FirstImage} />
            <ProductCard image={SecondImage} />
            <ProductCard image={ThirdImage} />
          </div>

          <div className='absolute w-full bottom-10 -right-2  xl:-top-10  xl:left-40  overflow-hidden -z-10'>

            <div className='flex xl:hidden '>
              <MobileBacklights />
            </div>

            <div className='hidden xl:flex '>
              <DesktopBacklights />
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}

export default BestOfBestContent