import React from 'react'


type Props = {
  isWhiteBorder?: boolean
}
const SignUpNowButton : React.FC<Props> = ({isWhiteBorder}) => {
  return (
    <button className={`${isWhiteBorder ?  'border-white' : 'border-[#78350F]'}  border-2 rounded-lg py-5 px-6` }>
    <p className={` ${isWhiteBorder ? 'text-white' : 'text-[#78350F]'} text-[20px] font-medium leading-6 tracking-[0.5px]`}>
      Sign up now
    </p>
  </button>
  )
}

export default SignUpNowButton