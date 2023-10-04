import React from "react"

interface BottomBarProps {
    children: React.ReactNode
}

export const BottomBar = ({children}: BottomBarProps) => {
    return (
        <div className='w-full h-20 
                        bg-black border-2 border-slate-300
                        transition-all ease-in-out duration-150 hover:h-[45rem]'>
            {children}
        </div>
    )
}