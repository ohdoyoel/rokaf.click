import { Dispatch, SetStateAction } from "react";
import { LogoImage } from "../LogoImage";

interface LocationItemProps {
    id: number // receive all data from parent looks better
    logoSrc: string
    name: string
    setLocationId: Dispatch<SetStateAction<number>>
}

export const LocationItem = ({id, logoSrc, name, setLocationId}:LocationItemProps) => {
    return (
        <li>
            <div className="flex gap w-9/12 items-center pl-2 rounded hover:bg-gray-100
                            transition-all ease-in-out duration-150 hover:scale-105">
                <input type="radio" name="location" value={id} onChange={() => setLocationId(id)}
                    className="w-4 h-4 bg-gray-100 checked:bg-gray-100 border-gray-300 rounded"/>
                <div className="pl-3">
                    <LogoImage logoSrc={logoSrc} size={30}/>
                </div>
                <label className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded">
                    {name}
                </label>
            </div>
        </li>
    )
}