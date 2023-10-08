import { SideBar } from "@/src/components/atoms/SideBar"
import { SearchLocation } from "@/src/components/molecules/SearchLocation"
import { Api } from "@/src/types/data"
import { Location } from "@/src/types/data"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

const context: Api = {
    apiRootUrl: "https://3001-ohdoyoel-rokafclickback-4nlx9a00kq8.ws-us105.gitpod.io"
}

interface LocationBarProps {
    setLocationId: Dispatch<SetStateAction<number>>
}

export const LocationBar = ({setLocationId}: LocationBarProps) => {
    const [locations, setLocations] = useState<Location[]>([])
    
    useEffect(() => {
        fetch(context.apiRootUrl + "/locations",
                {
                    method:'GET',
                    headers: {'Content-Type':'application/json'},
                })
            .then((res) => res.json())
            .then((data) => setLocations(data));
    }, [])

    // console.log(locations)

    return (
        <div className='absolute inset-y-52 left-0 rounded-r-lg
                        w-20 transition-all ease-in-out duration-150 hover:w-80
                        group'>
            <SideBar>
                <div className="hidden group-hover:block">
                    <SearchLocation setLocationId={setLocationId} locations={locations}/>
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p>부대 바꾸기</p>
                </div>
            </SideBar>
        </div>
    )
}