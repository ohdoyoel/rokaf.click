"use client"

import { SearchInput } from "@/src/components/atoms/SearchInput"
import { LocationItem } from "@/src/components/atoms/LocationItem"

interface SearchLocationProps {
    // GET id, name, score from DB Server
}

export const SearchLocation = ({}: SearchLocationProps) => {

    const onSearchInputKeyUp = () => { // filter function
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

    return (
        <div className="font-sans-medium">
            <p>부대 바꾸기</p>
            <SearchInput onKeyUp={onSearchInputKeyUp}/>
            <ul id="locationList" className="h-full w-full p-1 shadow overflow-y-auto text-sm text-gray-700">
                {/* repeatation by data from DB Server */}
                <LocationItem id={1}/>
                <LocationItem id={2}/>
            </ul>
        </div>
        
    )
}