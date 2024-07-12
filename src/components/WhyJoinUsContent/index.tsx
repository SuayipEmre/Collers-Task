import ListItemIcon from '@/icons/ListItemIcon'
import React from 'react'
import SignUpNowButton from '../SignUpNowButton'
import ScreenIcon from '@/icons/ScreenIcon'
import DecoVideo from '@/icons/DecoVideo'

const WhyJoinUsContent = () => {
    return (
            <div className='pt-4 pb-14 px-4  '>

                <div className=' shadow-black-strong  gap-8 '>
                    <div className='flex flex-col gap-5' >
                        <h5 className='text-[32px] leading-[35.2px] font-bold text-dark-blue text-center'>Why join us</h5>

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
                        <div className='text-center'>
                            <SignUpNowButton />
                        </div>

                    </div>

                    <div className='relative'>
                        <ScreenIcon />

                        <div className='absolute -top-10 -z-10'>
                            <DecoVideo />
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default WhyJoinUsContent