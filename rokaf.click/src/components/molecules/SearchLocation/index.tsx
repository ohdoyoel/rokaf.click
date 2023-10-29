'use client'

import { SearchInput } from "@/src/components/atoms/SearchInput"
import { LocationItem } from "../../atoms/LocationItem"
import { Location } from "@/src/types/data"
import { Dispatch, SetStateAction } from "react"

interface SearchLocationProps {
    locations: Location[]
    locationId: number
    setLocationId: Dispatch<SetStateAction<number>>
}

export const SearchLocation = ({locations, setLocationId, locationId}: SearchLocationProps) => {
    // filter function
    const onSearchInputKeyUp = () => { 
        let input, inputVal, ul, li;
        input = document.getElementById("searchInput") as HTMLInputElement;
        inputVal = input.value;
        ul = document.getElementById("locationList") as HTMLUListElement;
        li = ul.getElementsByTagName("li");
        for (let i = 0; i < li.length; i++) {
            let txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.indexOf(inputVal) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    const listAllLocations = () => {
        const result = []
        for (const location of locations) {
            result.push(<LocationItem key={location.id}
                        id={location.id} logoSrc={location.logoSrc} name={location.name}
                        setLocationId={setLocationId} isChecked={location.id === locationId}/>)
        }
        return result
    }

    return (
        <div className="flex flex-col items-start">
            <p className="text-xl text-center p-2">부대 바꾸기</p>
            <SearchInput onKeyUp={onSearchInputKeyUp}/>
            <ul id="locationList" className="h-full w-full p-1 overflow-y-auto text-sm text-gray-700">
                {listAllLocations()}
            </ul>
        </div>
        
    )
}