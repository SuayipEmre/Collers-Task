import { AppStoreDesktopIcon, AppStoreMobileIcon, FacebookIcon, GooglePlayDesktopIcon, GooglePlayMobileIcon, InstgramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '@/icons/LinkIcons'
import WorldIcon from '@/icons/WorldIcon'
import React from 'react'


type Props = {
    text: string
}
export const FooterItem: React.FC<Props> = ({ text }) => {
    return (
        <p className=" text-base   font-normal leading-[22.4px] text-center xl:text-left  text-[#E2E8F0] py-3 gap-2">{text}</p>
    )
}


type TitleProps = {
    title: string
}
export const FooterTitleItem: React.FC<TitleProps> = ({ title }) => {
    return (
        <h6 className=" text-base font-medium leading-[17.6px] text-center xl:text-left text-white gap-2 py-3">
            {title}
        </h6>
    )
}
const Footer = () => {
    return (
        <div className='bg-dark-blue px-4 xl:px-20'>

            <div className='flex flex-col xl:flex-row items-center justify-between gap-12 py-12 border-y border-y-[#334155] border-x-0 '>
               
                <div>
                    <FooterTitleItem title='Product' />

                    <FooterItem text='Pricing' />
                    <FooterItem text='Overview' />
                    <FooterItem text='Browse' />
                    <FooterItem text='Accessebility' />
                    <FooterItem text='Five' />

                </div>

                <div>

                    <FooterTitleItem title='Solutions' />

                    <FooterItem text='Brainstorming' />
                    <FooterItem text='Ideation' />
                    <FooterItem text='Wireframing' />
                    <FooterItem text='Research' />
                    <FooterItem text='Design' />

                </div>

                <div>
                    <FooterTitleItem title='Support' />
                    <FooterItem text='Contact Us' />
                    <FooterItem text='Developers' />
                    <FooterItem text='Documentation' />
                    <FooterItem text='Integrations' />
                    <FooterItem text='Repors' />
                </div>

                <div className='gap-2 flex flex-col items-center xl:block'>
                    <FooterTitleItem title='Get the App' />

                    <div className='flex flex-col items-center justify-center xl:block'>
                        <div className='hidden xl:flex'>  <AppStoreDesktopIcon /></div>
                        <div className='hidden xl:flex'><GooglePlayDesktopIcon /></div>
                        <div className='flex xl:hidden my-4'><AppStoreMobileIcon /></div>
                        <div className='flex xl:hidden'><GooglePlayMobileIcon /></div>

                        <div>
                            <div className='pt-12 pb-3 flex  justify-center xl:justify-normal'>
                                <FooterTitleItem title='Follow Us' />
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

/*
 <div className='grid w-screen grid-cols-12  gap-12 py-12 border-y border-y-[#334155] border-x-0 '>
               
                <div className='col-span-12 md:col-span-6 xl:col-span-3'>
                    <FooterTitleItem title='Product' />

                    <FooterItem text='Pricing' />
                    <FooterItem text='Overview' />
                    <FooterItem text='Browse' />
                    <FooterItem text='Accessebility' />
                    <FooterItem text='Five' />

                </div>

                <div className='col-span-12 md:col-span-6 xl:col-span-3'>

                    <FooterTitleItem title='Solutions' />

                    <FooterItem text='Brainstorming' />
                    <FooterItem text='Ideation' />
                    <FooterItem text='Wireframing' />
                    <FooterItem text='Research' />
                    <FooterItem text='Design' />

                </div>

                <div className='col-span-12 md:col-span-6 xl:col-span-3'>
                    <FooterTitleItem title='Support' />
                    <FooterItem text='Contact Us' />
                    <FooterItem text='Developers' />
                    <FooterItem text='Documentation' />
                    <FooterItem text='Integrations' />
                    <FooterItem text='Repors' />
                </div>

                <div className='gap-2 flex flex-col items-center xl:block col-span-12 md:col-span-6 xl:col-span-3 '>
                    <FooterTitleItem title='Get the App' />

                    <div className='flex flex-col items-center justify-center xl:block'>
                        <div className='hidden xl:flex'>  <AppStoreDesktopIcon /></div>
                        <div className='hidden xl:flex'><GooglePlayDesktopIcon /></div>
                        <div className='flex xl:hidden my-4'><AppStoreMobileIcon /></div>
                        <div className='flex xl:hidden'><GooglePlayMobileIcon /></div>

                        <div>
                            <div className='pt-12 pb-3 flex  justify-center xl:justify-normal'>
                                <FooterTitleItem title='Follow Us' />
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
*/