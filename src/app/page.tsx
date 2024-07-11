import Header from '@/components/header/Header'
import React from 'react'
import ProductCard from '@/components/ProductCard'
import Backlights from '@/icons/Backlights'
import TopContent from '@/components/TopContent'
import FirstImage from '@/assets/product-cart-image-first.jpeg'
import SecondImage from '@/assets/product-cart-image-second.jpeg'
import ThirdImage from '@/assets/product-cart-image-third.jpeg'

const Home = () => {
  return (
    <div>
      <Header />

      {/*top content sneaker*/}
      <TopContent />

      <div className='w-screen min-h-screen relative bg-[#0F172A] flex items-center flex-col justify-center gap-4 p-4'>
        <p className='font-bold text-[32px] leading-[35.2px] text-white '>The best of the best</p>

        <button className="border-2 border-white w-[179px] h-[56px] rounded-lg p-4">
          <p className="text-white text-[20px] font-medium leading-6 tracking-[0.5px]">
            Sign up now
          </p>
        </button>
        
        <div className='relative flex flex-col items-center '>

          <div className='absolute  bottom-0 z-10 '>
            <Backlights />
          </div>

          <div className='z-50'>
                <ProductCard  image={FirstImage}/>
                <ProductCard  image={SecondImage}/>
                <ProductCard  image={ThirdImage}/>
            </div>
        </div>

      </div>


    </div>
  )
}

export default Home