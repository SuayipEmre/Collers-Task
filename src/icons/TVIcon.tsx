import React from 'react'

const TVIcon = () => {
    return (
        <div className='relative'>
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 53.5368V24.2035C6 21.2579 8.38781 18.8701 11.3333 18.8701H54C56.9456 18.8701 59.3333 21.2579 59.3333 24.2035V53.5368C59.3333 56.4824 56.9456 58.8701 54 58.8701H11.3333C8.38781 58.8701 6 56.4824 6 53.5368Z" stroke="#78350F" strokeWidth="1.5" />
                <path d="M23.3334 6.87012L32.6667 16.2035L42 6.87012" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <HelperIcon />
        </div>
    )
}

export const HelperIcon = () => {
    return (
        <div className='absolute bottom-10 '>
            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" y="0.203613" width="45" height="45" rx="20" fill="#A21CAF" />
            </svg>

        </div>
    )
}

export default TVIcon