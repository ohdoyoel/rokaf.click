import React from "react"

interface SideBarProps {
    children: React.ReactNode
}

export const SideBar = ({children}: SideBarProps) => {
    return (
        <div className='w-full h-full p-3
                        bg-slate-300 shadow
                        overflow-auto'>
            {children}
        </div>
    )
}