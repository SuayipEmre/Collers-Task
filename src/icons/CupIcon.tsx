import React from 'react'

const CupIcon = () => {
    return (
        <>
            <svg
                width={50}
                height={50}
                viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6542 10.8701H46.8352C46.8352 10.8701 44.4869 46.2224 32.7448 46.2224C27.0087 46.2224 23.5143 37.7861 21.4403 29.1557C19.2686 20.1193 18.6542 10.8701 18.6542 10.8701Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M46.8352 10.87C46.8352 10.87 49.2917 8.24959 51.3333 8.20335C55.3333 8.11279 56.0728 10.87 56.0728 10.87C56.8557 12.4955 57.4819 16.7215 53.7245 20.6224C49.9669 24.5234 45.7608 27.9367 44.0491 29.1556" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.6541 10.8705C18.6541 10.8705 16.0946 8.22023 13.9999 8.20388C9.99989 8.17266 9.2604 10.8705 9.2604 10.8705C8.47758 12.4959 7.85134 16.722 11.6088 20.6229C15.3663 24.5239 19.7286 27.9372 21.4401 29.1564" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.351 53.5371C23.351 48.6608 32.7446 46.2227 32.7446 46.2227C32.7446 46.2227 42.1384 48.6608 42.1384 53.5371H23.351Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <HeartIcon />


        </>

    )
}



export const HeartIcon = () => {
    return (
        <div className='absolute bottom-10 left-5 '>
            <svg width="57" height="39" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M3.07107 17.7009C-3.22858 11.4013 1.23308 0.629883 10.1421 0.629883H46.7107C55.6197 0.629883 60.0814 11.4013 53.7817 17.701L35.4975 35.9852C31.5922 39.8905 25.2606 39.8905 21.3553 35.9852L3.07107 17.7009Z" fill="#0369A1" />
            </svg>
        </div>
    )
}
export default CupIcon 
