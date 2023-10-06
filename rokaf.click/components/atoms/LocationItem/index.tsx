interface LocationItemProps {
    id: number; // receive all data from parent looks better
}

export const LocationItem = ({id}:LocationItemProps) => {
    return (
        <li>
            <div className="flex w-full items-center pl-2 rounded hover:bg-gray-100">
            <input type="radio" name="loc" value={id} className="w-4 h-4 bg-gray-100 checked:bg-gray-100 border-gray-300 rounded"/>
            <label className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded">3여단 188대대 5포대</label>
            </div>
        </li>
    )
}