import { DesktopBacklights, MobileBacklights } from '@/icons/Backlights'
import React from 'react'
import ProductCard from '../ProductCard'
import FirstImage from '@/assets/product-cart-image-first.jpeg'
import SecondImage from '@/assets/product-cart-image-second.jpeg'
import ThirdImage from '@/assets/product-cart-image-third.jpeg'

const BestOfBestContent = () => {
  return (
    <div className='w-screen flex items-center justify-center bg-dark-blue'>
      <div className='2xl:w-full relative  flex items-center flex-col justify-center gap-4 p-4 xl:p-20 xl:gap-20 '>

        <div className='gap-8 flex flex-col items-center 2xl:flex-row 2xl:w-full 2xl:justify-between   '>
          <p className='font-bold text-[32px] leading-[35.2px] text-white '>The best of the best</p>

          <button className="border-2 border-white w-[179px] h-[56px] rounded-lg p-4">
            <p className="text-white text-[20px] font-medium leading-6 tracking-[0.5px]">
              Sign up now
            </p>
          </button>
        </div>

        <div className='relative flex flex-col items-center 2xl:items-start 2xl:w-full   '>

          <div className='absolute  bottom-0  overflow-hidden'>

            <div className='flex 2xl:hidden -z-10'>
              <MobileBacklights />
            </div>

            <div className='hidden 2xl:flex -z-10 '>
              <DesktopBacklights />
            </div>

          </div>

          <div className='z-50 2xl:flex w-full 2xl:py-20 2xl:gap-20 2xl:justify-between'>
            <ProductCard image={FirstImage} />
            <ProductCard image={SecondImage} />
            <ProductCard image={ThirdImage} />
          </div>
        </div>

      </div>
    </div>

  )
}

export default BestOfBestContent