'use client'

import { SearchInput } from "@/src/components/atoms/SearchInput"
import { LocationItem } from "../../atoms/LocationItem"
import { Location } from "@/src/types/data"

interface SearchLocationProps {
    locations: Location[]
}

export const SearchLocation = ({locations}: SearchLocationProps) => {
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
                        id={location.id} logoSrc={location.logoSrc} name={location.name}/>)
        }
        return result
    }

    return (
        <div className="font-sans-medium">
            <p>부대 바꾸기</p>
            <SearchInput onKeyUp={onSearchInputKeyUp}/>
            <ul id="locationList" className="h-full w-full p-1 shadow overflow-y-auto text-sm text-gray-700">
                {listAllLocations()}
            </ul>
        </div>
        
    )
}