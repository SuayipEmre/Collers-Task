import React from 'react'

const CursusAmetIcon = () => {
    return (
        <div className='relative'>
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54 53.5368L11.3334 40.2034M54 53.5368H11.3334V40.2034L54 53.5368ZM54 53.5368V32.2034C54 20.4214 44.4488 10.8701 32.6667 10.8701C30.5486 10.8701 28.5027 11.1788 26.5715 11.7536C17.7593 14.3762 11.3334 22.5394 11.3334 32.2034V40.2034L54 53.5368Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M43.3334 24.2036V26.8703" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M32.6667 21.5371V24.2038" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M22 18.8701V21.5368" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <HelperIcon />

        </div>
    )
}


const HelperIcon = () => {
    return (
        <div className='absolute bottom-10 '>
            <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M21.9289 3.27467C28.2286 -3.02498 39 1.4367 39 10.3457L39 29.2036C39 34.7265 34.5228 39.2036 29 39.2036L10.1421 39.2036C1.23308 39.2036 -3.22858 28.4322 3.07107 22.1325L21.9289 3.27467Z" fill="#15803D" />
            </svg>

        </div>
    )
}

export default CursusAmetIcon