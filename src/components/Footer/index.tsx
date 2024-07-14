import {
    AppStoreDesktopIcon,
    AppStoreMobileIcon,
    FacebookIcon,
    GooglePlayDesktopIcon,
    GooglePlayMobileIcon,
    InstgramIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon
} from '@/icons/LinkIcons'
import WorldIcon from '@/icons/WorldIcon'
import React from 'react'
import { FooterTextItem } from './FooterTextItem'
import { FooterSectionTitle } from './FooterSectionTitle'


const Footer = () => {
    return (
        <div className='bg-dark-blue  px-4 xl:px-20'>

            <div className='flex flex-col xl:flex-row items-center justify-between gap-12 py-12 border-y border-y-[#334155] border-x-0 '>

                <div>
                    <FooterSectionTitle title='Product' />

                    <FooterTextItem text='Pricing' />
                    <FooterTextItem text='Overview' />
                    <FooterTextItem text='Browse' />
                    <FooterTextItem text='Accessebility' />
                    <FooterTextItem text='Five' />

                </div>

                <div>

                    <FooterSectionTitle title='Solutions' />

                    <FooterTextItem text='Brainstorming' />
                    <FooterTextItem text='Ideation' />
                    <FooterTextItem text='Wireframing' />
                    <FooterTextItem text='Research' />
                    <FooterTextItem text='Design' />

                </div>

                <div>
                    <FooterSectionTitle title='Support' />
                    <FooterTextItem text='Contact Us' />
                    <FooterTextItem text='Developers' />
                    <FooterTextItem text='Documentation' />
                    <FooterTextItem text='Integrations' />
                    <FooterTextItem text='Repors' />
                </div>

                <div className='gap-2 flex flex-col items-center xl:block'>
                    <FooterSectionTitle title='Get the App' />

                    <div className='flex flex-col items-center justify-center xl:block'>
                        <div className='hidden xl:flex'>  <AppStoreDesktopIcon /></div>
                        <div className='hidden xl:flex'><GooglePlayDesktopIcon /></div>
                        <div className='flex xl:hidden my-4'><AppStoreMobileIcon /></div>
                        <div className='flex xl:hidden'><GooglePlayMobileIcon /></div>

                        <div>
                            <div className='pt-12 pb-3 flex  justify-center xl:justify-normal'>
                                <FooterSectionTitle title='Follow Us' />
                            </div>
                            <div className='flex items-center gap-4'>
                                <YoutubeIcon />
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstgramIcon />
                                <LinkedinIcon />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='gap-6 py-12 xl:py-6 xl:gap-12 flex flex-col xl:flex-row items-center justify-between '>
                <p className=" text-base font-normal leading-[22.4px] text-center text-[#E2E8F0] ">
                    Collers @ 2023. All rights reserved.
                </p>

                <div className='flex gap-8 '>
                    <p className=" text-base font-normal leading-[22.4px] text-left text-[#E2E8F0]">Terms</p>
                    <p className=" text-base font-normal leading-[22.4px] text-left text-[#E2E8F0]">Privacy</p>
                    <p className=" text-base font-normal leading-[22.4px] text-left text-[#E2E8F0]">Contact</p>
                    <WorldIcon />
                    <p className=" text-base font-normal leading-[22.4px] text-left text-[#E2E8F0]">EN</p>
                </div>
            </div>



        </div>
    )
}

export default Footer
