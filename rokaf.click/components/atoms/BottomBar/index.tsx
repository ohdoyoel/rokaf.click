import React from "react"

interface BottomBarProps {
    children: React.ReactNode
}

export const BottomBar = ({children}: BottomBarProps) => {
    return (
        <div className='w-full h-full p-3
                        bg-slate-300 shadow
                        overflow-auto'>
            {children}
        </div>
    )
}