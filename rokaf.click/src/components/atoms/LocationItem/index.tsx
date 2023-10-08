import { LogoImage } from "../LogoImage";

interface LocationItemProps {
    id: number // receive all data from parent looks better
    logoId: number
    name: string
}

export const LocationItem = ({id, logoId, name}:LocationItemProps) => {
    return (
        <li>
            <div className="flex gap w-9/12 items-center pl-2 rounded hover:bg-gray-100
                            transition-all ease-in-out duration-150 hover:scale-105">
                <input type="radio" name="loc" value={id}
                    className="w-4 h-4 bg-gray-100 checked:bg-gray-100 border-gray-300 rounded"/>
                <div className="pl-3">
                    <LogoImage logoId={logoId} size={30}/>
                </div>
                <label className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded">
                    {name}
                </label>
            </div>
        </li>
    )
}