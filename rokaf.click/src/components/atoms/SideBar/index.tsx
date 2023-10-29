import React from "react"

interface SideBarProps {
    isLocationBar: boolean
    children: React.ReactNode
}

export const SideBar = ({isLocationBar, children}: SideBarProps) => {
    return (
        <div className={`w-full h-full p-3
                        bg-zinc-300 shadow-xl
                        overflow-auto ${isLocationBar ? 'rounded-r-lg' : 'rounded-l-lg'}`}>
            {children}
        </div>
    )
}