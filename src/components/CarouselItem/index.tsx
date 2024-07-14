import Image, { StaticImageData } from "next/image"

type Props = {
    icon: React.ReactNode
    explanation: string
    name: string
    job: string
    profile_image: StaticImageData
}
const CarouselItem: React.FC<Props> = ({ explanation, icon, job, name, profile_image }) => {
    return (
        <div className='border border-custom-gray rounded-[20px]   shadow-black-strong bg-white p-6 gap-2 xl:p-8 xl:gap-4'>

            <div className='py-4'>
                {icon}
            </div>
            <p className="text-base xl:text-2xl xl:leading-[38.4px] font-normal leading-[22.4px] text-left text-dark-blue w-[271px] xl:w-80   ">{explanation}</p>


            {/*User Card */}
            <div className='gap-4 pt-4 flex items-center  h-20'>
                <Image src={profile_image} alt={name} className='w-16 h-16 gap-[10px] rounded-full' />

                <div>
                    <p className="text-lg font-normal leading-[28.8px] text-left text-black">{name}</p>
                    <p className="text-base font-normal leading-[22.4px] text-left text-[#475569]">{job}</p>


                </div>
            </div>

        </div>
    )
}

export default CarouselItem
