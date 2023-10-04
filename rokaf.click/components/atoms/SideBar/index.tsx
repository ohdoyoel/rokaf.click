import React from "react"

interface SideBarProps {
    children: React.ReactNode
}

export const SideBar = ({children}: SideBarProps) => {
    return (
        <div className='w-20 h-full p-3
                        bg-slate-300 shadow
                        transition-all ease-in-out duration-150 hover:w-80'>
            {children}
        </div>
    )
}