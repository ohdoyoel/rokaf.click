import React from "react"

interface SideBarProps {
    children: React.ReactNode
}

export const SideBar = ({children}: SideBarProps) => {
    return (
        <div className='w-20 h-full 
                        bg-black border-2 border-slate-300
                        transition-all ease-in-out duration-150 hover:w-80'>
            {children}
        </div>
    )
}