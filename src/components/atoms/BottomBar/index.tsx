import React from "react"

interface BottomBarProps {
    children: React.ReactNode
}

export const BottomBar = ({children}: BottomBarProps) => {
    return (
        <div className='w-full h-full p-3
                        bg-zinc-300 shadow-2xl
                        overflow-auto rounded-t-lg'>
            {children}
        </div>
    )
}