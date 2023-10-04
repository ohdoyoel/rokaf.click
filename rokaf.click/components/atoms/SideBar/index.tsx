import React from "react"

interface SideBarProps {
    children: React.ReactNode
}

export const SideBar = ({children}: SideBarProps) => {
    return (
        // the width can't be sized 14 or 40, what the fk
        <div className='w-14 h-full bg-black border-2 border-slate-300 hover:w-40'>
            {children}
        </div>
    )
}