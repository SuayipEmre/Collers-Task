import ListItemIcon from '@/icons/ListItemIcon'
import React from 'react'
import SignUpNowButton from '../SignUpNowButton'
import { DesktopScreenIcon, MobileScreenIcon } from '@/icons/ScreenIcon'
import { DesktopDecoVideo, MobileDecoVideo } from '@/icons/DecoVideo'

const WhyJoinUsContent = () => {
    return (
        <div className='pt-4  pb-14 px-4  xl:flex xl:justify-center '>
            
            <div className='shadow-black-strong gap-8 py-8 px-4 md:flex xl:flex xl:p-20 xl:gap-20 xl:items-center xl:bg-transparent md:justify-between xl:py-40 xl:px-20 rounded-[30px] xl:w-[1280px] xl:h-[496px] '>
                
                <div className='flex flex-col gap-5' >
                    <h5 className='text-[32px] leading-[35.2px] font-bold text-dark-blue text-center xl:text-start'>Why join us</h5>

                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 '>
                            <ListItemIcon />
                            <p className='text-base text-dark-blue font-normal'>Est et in pharetra magna adipiscing ornare aliquam.</p>
                        </div>
                        <div className='flex gap-2 '>
                            <ListItemIcon />
                            <p className='text-base text-dark-blue font-normal'>Tellus arcu sed consequat ac velit ut eu blandit.</p>
                        </div>
                        <div className='flex gap-2 '>
                            <ListItemIcon />
                            <p className='text-base text-dark-blue font-normal'>Ullamcorper ornare in et egestas dolor orci.</p>
                        </div>

                    </div>
                    
                    <div className='text-center xl:text-start'>
                        <SignUpNowButton />
                    </div>

                </div>

                <div className='relative overflow-hidden'>
                    
                    <div className='flex xl:hidden'><MobileScreenIcon /></div>
                    <div className='hidden xl:flex'><DesktopScreenIcon /></div>

                    <div className='absolute -top-10 -z-10 xl:-top-20 xl:-right-28'>
                        <div className='flex xl:hidden'><MobileDecoVideo /></div>
                        <div className='hidden xl:flex'><DesktopDecoVideo /></div>
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default WhyJoinUsContent