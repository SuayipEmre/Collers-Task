import React from 'react'

export const MobileRectangle = () => {
    return (
        <div className='-z-10 absolute top-0 left-0 right-0 bottom-0 '>
            <svg
                viewBox="0 0 393 324"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M393 106.716V0L0 324H393V106.716Z" fill="#FEF3C7" />
            </svg>



        </div>
    )
}


export const DesktopRectangle = () => {
    return (
       <div className='-z-10 absolute -top-50 left-0 right-0 bottom-0 bg-red-'>
         <svg viewBox="0 0 1428 806" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1428 265.472V0L0 806H1428V265.472Z" fill="#FEF3C7" />
        </svg>
       </div>

    )
}

