import React from 'react'


type Props = {
  icon : React.ReactNode
  title : string
  text : string

}
const TopContentItem : React.FC<Props> = ({icon, text, title}) => {
  return (
    <div className='flex flex-col items-center xl:items-start gap-4'>
      {icon}

      <h3 className='text-[20px] leading-[22px] text-center text-[#0F172A]'>{title}</h3>

      <p className='font-normal  text-center xl:text-start text-lg leading-[28.8px] w-[373.33px]'>{text} </p>
    </div>
  )
}

export default TopContentItem