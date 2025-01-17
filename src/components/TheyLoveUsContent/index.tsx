'use client'
import ShellsIcon from '@/icons/ShellsIcon';
import React from 'react'
import Carousel from "react-multi-carousel";
import HelenaJohn from '@/assets/helena-john.jpeg'
import DavidOshodi from '@/assets/david-oshodi.jpeg'
import HellenJumy from '@/assets/hellen-jumy.jpeg'
import CharoletteHanlin from '@/assets/charolette-hanlin.jpeg'
import 'react-multi-carousel/lib/styles.css';
import ZommerIcon from '@/icons/ZommerIcon';
import ArtVenue from '@/icons/ArtVenue';
import CarouselItem from '../CarouselItem';
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import { LeftButtonIcon, RightButtonIcon } from '@/icons/ButtonIcon';
import WavesLogoIcon from '@/icons/WavesCompanyIcon';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 3,
        itemSpacing: 10, 
    },
    tablet: {
        breakpoint: { max: 1280, min: 464 },
        items: 1,        itemSpacing: 10, 

    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        itemSpacing: 10, 
    }
};


const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
    return (
        <div className="absolute right-0 -top-[137px] hidden xl:flex gap-6">
            <div onClick={next} className='cursor-pointer'>
                <LeftButtonIcon />
            </div>
            <div onClick={previous} className='cursor-pointer'>
                <RightButtonIcon />
            </div>
        </div>
    );
}



const TheyLoveUscontent = () => {
    return (
        <div className='flex flex-col  items-center py-12  px-4 xl:gap-20 xl:p-20 '>
          
            <div className='w-[361px]  xl:w-[1280px]  gap-2 xl:gap-12  '>
                <h5 className="w-full text-[32px] xl:text-4xl   font-bold leading-[35.2px] text-center xl:text-start text-dark-blue my-4">Because they love us</h5>
            </div>

            <div className='bg-[#FDE68A] w-full h-[277px] xl:h-[421px] xl:w-[1360px] relative'>
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    draggable
                    focusOnSelect={false}
                    infinite
                    keyBoardControl
                    minimumTouchDrag={20}
                    pauseOnHover
                    responsive={responsive}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                    renderButtonGroupOutside={true}
                    renderDotsOutside
                    customButtonGroup={<ButtonGroup />}
                    partialVisible={false}
                    itemClass='flex justify-center mt-4 xl:mt-12  '
                   


                >
                    <CarouselItem
                        explanation='Aliquet ridiculus mi porta habitant  vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.'
                        icon={<ShellsIcon />}
                        name='Hellena John'
                        job='Co-founder'
                        profile_image={HelenaJohn}
                    />
                    <CarouselItem
                        explanation='Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.'
                        icon={<ZommerIcon />}
                        job='Team Lead'
                        name='Hellen Jumy'
                        profile_image={HellenJumy}

                    />
                    <CarouselItem
                        explanation='A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.'
                        icon={<ArtVenue />}
                        job='Manager'
                        name='David Oshodi'
                        profile_image={DavidOshodi}
                    />

                    <CarouselItem
                        explanation='Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.'
                        icon={<WavesLogoIcon />}
                        job='Ceo'
                        name='Charolette Hanlin'
                        profile_image={CharoletteHanlin}
                    />


                </Carousel>
            </div>
        </div>
    )
}

export default TheyLoveUscontent