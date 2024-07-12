import React from 'react'
import CardFirstImage from '@/assets/product-cart-image-first.jpeg'
import Image, { StaticImageData } from 'next/image'
import CartIcon from '@/icons/CartIcon'


type Props = {
    image :  StaticImageData
}
const ProductCard : React.FC<Props> = ({image}) => {
    return (


        <div className='flex flex-col w-[361px] 2xl:w-[394.67px] h-[472px] items-center px-4 gap-4 rounded-[10px] border border-dark-blue my-4 shadow-white-strong  ' >
            <Image src={image} alt='shoes' className='rounded-[4px] w-[361px] 2xl:w-[394.67px] h-[220px]' />


            <div className='grid gap-4 w-full'>
                <h6 className='text-xl text-white  font-bold leading-[26.4px]'>Title</h6>
                <p className=" text-lg text-white  font-normal leading-[28.8px]  text-left ">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
            </div>

           




            <button className="border-2 border-white w-[297px] h-[56px] rounded-lg p-4 flex items-center justify-center gap-4">
                <CartIcon />
                <p className="text-white text-[20px] font-medium leading-6 tracking-[0.5px]">
                    Buy now
                </p>
            </button>

        </div>

    )
}

export default ProductCard