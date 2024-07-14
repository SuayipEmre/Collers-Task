import { DesktopElipses, MapDesktopIcon, MapMobileIcon, MobileElipses } from '@/icons/MapIcons'
import React from 'react'
import Shoes from '@/assets/shoes.jpeg'
import Image from 'next/image'

const ShoesCollectedContent = () => {
  return (
    <div className='relative bg-[#78350F] w-screen gap-8 py-12 px-4 h-[717px]  xl:mx-auto'>


      <div className='absolute top-10 left-[20%] z-10'>
        <Image src={Shoes} alt='shoes' className='rounded-[10px] gap-[10px] w-64 h-[200px] border-[5px] border-white shadow-black-heavy' />

        <div className='pt-4 pb-2 px-4 w-[250px]  bg-[#E2E8F0] rounded-[5px] shadow-black-strong'>
          <p className="  pt-4 px-4 pb-2 text-sm font-normal leading-[19.6px] text-left">
            Emma Simpson collected one pair of Cool Shoes.
          </p>

        </div>

        <div className='flex flex-col gap-8 h-24 mt-14 xl:items-start  xl:ml-44 '>
          <h3 className=" text-5xl  font-extrabold leading-[52.8px] text-center xl:text-[96px] xl:leading-[105px] text-[#FFFBEB]">
            11,658,467
          </h3>

          <h5 className=" text-4xl font-bold leading-[35.2px] text-center  xl:w-full text-[#FFFBEB]">
            Shoes Collected
          </h5>
        </div>
      </div>


      <div className=''>
        <div className='flex xl:hidden'> <MapMobileIcon /></div>
        <div className='hidden xl:flex items-center justify-center'> <MapDesktopIcon /></div>
      </div>

      <div className='absolute top-20 right-0 sm:right-40  md:right-56 xl:top-22  xl:right-1/3 '>
        <div className='flex xl:hidden'><MobileElipses /></div>
        <div className='hidden xl:flex'><DesktopElipses /></div>
      </div>



    </div>
  )
}

export default ShoesCollectedContent