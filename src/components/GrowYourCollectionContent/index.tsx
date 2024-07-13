import AmetFringillaIcon from '@/icons/AmetFringillaIcon'
import AmetNibhIcon from '@/icons/AmetNibhIcon'
import CrasEgetIcon from '@/icons/CrasEgetIcon'
import { CollectionContentBackScreenDesktopIcon, CollectionContentBackScreenMobileIcon, CollectionContentFrontScreenDesktopIcon, CollectionContentFrontScreenMobileIcon, CollectionContentHelperDesktopIcon, CollectionContentHelperMobileIcon } from '@/icons/GrowYourCollectionScreensIcons'
import RightArrowIcon from '@/icons/RightArrowIcon'
import RocketIcon from '@/icons/RocketIcon'
import SearchIcon from '@/icons/SearchIcon'
import SedVelitIcon from '@/icons/SedVelitIcon'
import { WavesDesktopIcon, WavesMobileIcon } from '@/icons/Waves'
import React from 'react'




type ListItemsTypes = {
    id: number,
    icon: React.ReactNode,
    text: string,
    arrowIcon?: React.ReactNode
}

export const ListItems: ListItemsTypes[] = [
    {
        id: 0,
        icon: <SearchIcon />,
        text: 'Bibendum tellus',
        arrowIcon: <RightArrowIcon />
    },
    {
        id: 1,
        icon: <CrasEgetIcon />,
        text: 'Cras eget',
    },
    {
        id: 2,
        icon: <RocketIcon />,
        text: 'Dolor pharetra',
    },
    {
        id: 3,
        icon: <AmetFringillaIcon />,
        text: 'Amet, fringilla',
    },
    {
        id: 4,
        icon: <AmetNibhIcon />,
        text: 'Amet nibh',
    },
    {
        id: 5,
        icon: <SedVelitIcon />,
        text: 'Sed velit',
    },
]
const GrowYourCollectionContent = () => {
    return (
        <div className='relative w-[393px]  h-[722px] pt-12 px-4 pb-24 gap-8 xl:w-[1440px] mx-auto xl:h-[996px] xl:px-20 xl:pt-20 xl:pb-32 xl:gap-20'>

            <div className='flex flex-col gap-8 w-[361px] xl:w-[1280px] '>
                <p className="font-roboto text-4xl w-full font-bold leading-[35.2px] text-center text-dark-blue xl:font-extrabold xl:text-start ">Grow your collection</p>

                <p className="font-roboto text-base font-normal leading-[22.4px] text-center text-dark-blue xl:text-lg xl:font-normal xl:leading-[28.8px] xl:text-start">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
            </div>

            <div className='xl:flex xl:justify-between gap-8  xl:gap-20 '>
                
                <div className=''>

                    <div className='hidden xl:flex xl:flex-col'>



                        {
                            ListItems.map(item => (
                                <>
                                    <div key={item.id} className={item.id == 0 ? 'flex items-center w-[270px] xl:w-[256] h-[56px] pt-4 rounded-lg p-4 gap-4 shadow-black-strong ' : 'flex p-4 gap-4'}>
                                        {item.icon}
                                        <p className='text-xl tracking-[0.5px] font-medium leading-6 text-dark-blue'>{item.text}</p>
                                        <div className='hidden xl:flex'>{item.arrowIcon}</div>
                                    </div>
                                </>
                            ))
                        }
                    </div>


                    <div className="flex items-center xl:hidden w-[240px] xl:w-[256] h-[56px] pt-4 rounded-lg p-4 gap-4 shadow-black-strong ">
                        <SearchIcon />
                        <p className='text-xl tracking-[0.5px] font-medium leading-6 text-dark-blue'>Bibendum tellus</p>
                        <div className='hidden xl:flex'><RightArrowIcon /></div>
                    </div>

                </div>


                {/*Screen Icons */}
                <div className='relative gap-8'>
                    <div>
                        <div className='flex xl:hidden'><CollectionContentBackScreenMobileIcon /></div>
                        <div className='hidden xl:flex'><CollectionContentBackScreenDesktopIcon /></div>
                    </div>

                    <div className='absolute top-14 xl:top-24 xl:left-10'>
                        <div className='flex xl:hidden'>
                            <CollectionContentFrontScreenMobileIcon />
                        </div>

                        <div className='hidden xl:flex'>
                            <CollectionContentFrontScreenDesktopIcon />
                        </div>
                    </div>

                    <div className='absolute -bottom-10 right-0  xl:-right-24 '>
                        <div className='flex xl:hidden'><CollectionContentHelperMobileIcon /></div>
                        <div className='hidden xl:flex'><CollectionContentHelperDesktopIcon /></div>
                    </div>
                </div>
            </div>


            {/*Waves icons */}
            <div className='absolute bottom-0  left-0 right-0 -z-10'>
                <div className='flex xl:hidden'><WavesMobileIcon /></div>
                <div className='hidden xl:flex'><WavesDesktopIcon /></div>
            </div>
        </div>
    )
}

export default GrowYourCollectionContent