import { Dispatch, SetStateAction } from "react";
import { LogoImage } from "../LogoImage";

interface LocationItemProps {
    id: number
    logoSrc: string
    name: string
    setLocationId: Dispatch<SetStateAction<number>>
    isChecked: boolean
}

export const LocationItem = ({id, logoSrc, name, setLocationId, isChecked}:LocationItemProps) => {
    return (
        <li onClick={() => setLocationId(id)}>
            <div className="flex w-full gap items-center pl-2 rounded hover:bg-gray-100
                            transition ease-in-out duration-150
                            hover:scale-[1.02] active:scale-[1.01]">
                <div className="w-4 h-4">
                    <svg className={`rounded-lg border border-gray-400 bg-gray-100 ${isChecked ? 'text-gray-500' : 'text-gray-100'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"/>
                    </svg>
                </div>
                <div className="pl-3">
                    <LogoImage logoSrc={logoSrc} size={30}/>
                </div>
                <label className="w-full p-2 ml-2 text-sm font-medium text-gray-900" >
                    {name}
                </label>
            </div>
        </li>
    )
}