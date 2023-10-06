import React from "react"

interface BottomBarProps {
    children: React.ReactNode
}

export const BottomBar = ({children}: BottomBarProps) => {
    return (
        <div className='w-full h-20 p-3
                        bg-slate-300 shadow
                        transition-all ease-in-out duration-150 hover:h-[45rem]'>
            {children}
        </div>
    )
}