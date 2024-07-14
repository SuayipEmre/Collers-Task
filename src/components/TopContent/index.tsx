import { DesktopRectangle, MobileRectangle } from '@/icons/Rectangle'
import React from 'react'
import TopContentItem from './TopContentItem'
import KupaIcon from '@/icons/KupaIcon'
import CursusAmetIcon from '@/icons/CursusAmetIcon'
import TVIcon from '@/icons/TVIcon'
import Sneaker from '@/assets/sneaker.png'
import SignUpNowButton from '../SignUpNowButton'
import WatchIcon from '@/icons/WatchIcon'
import Image from 'next/image'

const TopContent = () => {
  return (
    <div>

      <div className="py-12 w-screen px-4 xl:p-20 xl:gap-20 relative mt-12">

        <div className='flex flex-col items-center gap-8 2xl:flex-row 2xl:justify-between '>


          <div className='2xl:w-[714px] grid gap-8 xl:gap-12 '>


            <h1 className=" text-6xl font-extrabold leading-[61.6px] text-center text-dark-blue xl:text-start">
              Collectible Sneakers
            </h1>

            <p className="text-dark-blue  text-lg font-normal leading-[28.8px] text-center 2xl:text-start">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">

              <SignUpNowButton />
              <button className="w-[152px] h-[48px] rounded-lg py-3 px-2 flex items-center justify-between">
                <WatchIcon />
                <p className="text-[#78350F] w-[96px] text-sm font-medium leading-6 tracking-[0.5px]">
                  Watch Demo
                </p>
              </button>
            </div>
          </div>

          <div className='w-[361px] h-[314.2px] xl:w-[486px] xl:h-[423.2px]  flex items-center justify-center  '>
            <div className="w-[272.61px] h-[276.32px]  gap-[10px] rounded-[50px] xl:w-[367px] xl:h-[372px] flex items-center justify-center bg-[#FBBF24]">
              <Image src={Sneaker} alt='sneaker' width={486} height={388} priority className='!xl:w-[486px] !xl:h-[388px] ' />
            </div>

            <div>

            </div>


          </div>

        </div>



        <div className='w-screen flex flex-col items-center '>

          <div className='-z-10 absolute  -top-28  left-0 right-0    hidden 2xl:flex'>
            <DesktopRectangle />
          </div>

          <div className='-z-10 absolute  bottom-0 left-0 right-0 block 2xl:hidden'>
            <MobileRectangle />
          </div>

        </div>


      </div>

      <div className='py-12 px-4 gap-8 xl:p-20 xl:gap-20   flex flex-col  items-center  bg-[#FEF3C7]  2xl:flex-row 2xl:bg-transparent 2xl:justify-start'>

        <TopContentItem
          icon={<KupaIcon />}
          text='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
          title='Nibh viverra' />


        <TopContentItem
          icon={<CursusAmetIcon />}
          text='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '
          title='Cursus amet' />

        <TopContentItem
          icon={<TVIcon />}
          text='Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
          title='Ipsum fermentum' />

      </div>
    </div>
  )
}

export default TopContent