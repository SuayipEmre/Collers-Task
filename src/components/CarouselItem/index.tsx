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
        <div className='border border-custom-gray w-[319px] h-[296px] rounded-[20px]  shadow-black-strong bg-white p-6 gap-2'>

            <div className='py-4'>
                {icon}
            </div>
            <p className=" text-base font-normal leading-[22.4px] text-left text-dark-blue w-[271px] ">{explanation}.</p>


            {/*User Card */}
            <div className='gap-4 py-4 flex items-center w-[271px] h-20'>
                <Image src={profile_image} alt={name} className='w-16 h-16 gap-[10px] rounded-full' />

                <div>
                    <p className=" text-lg font-normal leading-[28.8px] text-left text-dark-blue">{name}</p>
                    <p className=" text-base font-normal leading-[22.4px] text-left text-[#475569]">{job}</p>


                </div>
            </div>

        </div>
    )
}

export default CarouselItem
