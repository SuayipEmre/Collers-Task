import Header from '@/components/header/Header'
import Rectangle from '@/icons/Rectangle'
import WatchIcon from '@/icons/WatchIcon'
import Image from 'next/image'
import React from 'react'
import Sneaker from '@/assets/sneaker.png'
import KupaIcon from '@/icons/KupaIcon'
import CursusAmetIcon from '@/icons/CursusAmetIcon'
import TVIcon from '@/icons/TVIcon'
const Home = () => {
  return (
    <div>
      <Header />

      {/*top content sneaker*/}
      <div className=" py-12 px-4 flex flex-col items-center gap-8">
        <h1 className="font-roboto text-6xl font-extrabold leading-[61.6px] text-center text-[#0F172A]">
          Collectible Sneakers
        </h1>

        <p className="text-[#0F172A] font-roboto text-lg font-normal leading-[28.8px] text-center">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
        </p>

        {/* Buttons */}
        <div className="w-[347px] h-14 flex gap-4">
          <button className="border-2 border-[#78350F] w-[179px] h-[56px] rounded-lg p-4">
            <p className="text-[#78350F] text-[20px] font-medium leading-6 tracking-[0.5px]">
              Sign up now
            </p>
          </button>

          <button className="w-[152px] h-[48px] rounded-lg py-3 px-2 flex items-center justify-between">
            <WatchIcon />
            <p className="text-[#78350F] w-[96px] text-sm font-medium leading-6 tracking-[0.5px]">
              Watch Demo
            </p>
          </button>
        </div>




        <div className='w-screen relative flex flex-col items-center'>
          <Rectangle />
          <div className='w-[361px] h-[314.2px]  flex items-center justify-center '>
            <div className="w-[272.61px] h-[276.32px]  gap-[10px] rounded-[50px] flex items-center justify-center bg-[#FBBF24]">
              <Image src={Sneaker} alt='snekaer' />
            </div>

          </div>

          <div className='w-full flex flex-col items-center bg-[#FEF3C7] gap-8 py-12 px-4'>
            <div className='flex flex-col  items-center w-[373.33px] h-[205px] gap-4 mt-12'>
              <KupaIcon />

              <h3 className='text-[20px] leading-[22px] text-center text-[#0F172A]'>Nibh viverra</h3>

              <p className='font-normal  text-center text-lg leading-[28.8px]'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>

            <div className='flex flex-col  items-center w-[373.33px] h-[205px] gap-4 mt-12'>
              <CursusAmetIcon />

              <h3 className='text-[20px] leading-[22px] text-center text-[#0F172A]'>Cursus amet</h3>

              <p className='font-normal  text-center text-lg leading-[28.8px]'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>


            <div className='flex flex-col   items-center w-[373.33px] h-[205px] gap-4 mt-12'>
              <TVIcon />

              <h3 className='text-[20px] leading-[22px] text-center text-[#0F172A]'>Ipsum fermentum</h3>

              <p className='font-normal  text-center text-lg leading-[28.8px]'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.  </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home