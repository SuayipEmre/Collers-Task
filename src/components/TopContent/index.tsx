import { DesktopRectangle, MobileRectangle } from '@/icons/Rectangle'
import React from 'react'
import TopContentItem from '../TopContentItem'
import KupaIcon from '@/icons/KupaIcon'
import CursusAmetIcon from '@/icons/CursusAmetIcon'
import TVIcon from '@/icons/TVIcon'
import Sneaker from '@/assets/sneaker.png'
import SignUpNowButton from '../SignUpNowButton'
import WatchIcon from '@/icons/WatchIcon'
import Image from 'next/image'

const TopContent = () => {
  return (
      <div className="pt-12">

        <div className='flex flex-col items-center gap-8 md:flex-row md:justify-between px-8'>


          <div className='md:w-[714px] grid gap-8 md:gap-12 '>


            <h1 className="font-roboto text-6xl font-extrabold leading-[61.6px] text-center text-[#0F172A] md:text-start">
              Collectible Sneakers
            </h1>

            <p className="text-[#0F172A] font-roboto text-lg font-normal leading-[28.8px] text-center md:text-start">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
            </p>

            {/* Buttons */}
            <div className="w-[347px] h-14 flex gap-4">

              <SignUpNowButton />
              <button className="w-[152px] h-[48px] rounded-lg py-3 px-2 flex items-center justify-between">
                <WatchIcon />
                <p className="text-[#78350F] w-[96px] text-sm font-medium leading-6 tracking-[0.5px]">
                  Watch Demo
                </p>
              </button>
            </div>
          </div>

          <div className='w-[361px] h-[314.2px] md:w-[486px] md:h-[423.2px]  flex items-center justify-center '>
            <div className="w-[272.61px] h-[276.32px]  gap-[10px] rounded-[50px] flex items-center justify-center bg-[#FBBF24]">
              <Image src={Sneaker} alt='sneaker' />
            </div>

          </div>

        </div>



        <div className='w-screen  relative flex flex-col items-center'>

          <div className='!hidden md:!block '><DesktopRectangle /></div>
          <div className='!block md:!hidden'><MobileRectangle /></div>

          <div className='
  w-full flex flex-col  items-center bg-[#FEF3C7] gap-8 py-12 px-4
  md:flex-row md:bg-transparent md:justify-center
  '>

            <TopContentItem icon={<KupaIcon />} text='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.' title='Nibh viverra' />


            <TopContentItem icon={<CursusAmetIcon />} text='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ' title='Cursus amet' />

            <TopContentItem icon={<TVIcon />} text='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.' title='Ipsum fermentum' />

          </div>

        </div>


      </div>
  )
}

export default TopContent