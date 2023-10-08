import { SideBar } from "@/src/components/atoms/SideBar"
import { SearchLocation } from "@/src/components/molecules/SearchLocation"
import { getAllLocations } from "@/src/services/get-all-locations"
import { Api } from "@/src/types/data"
import { Location } from "@/src/types/data"

const context: Api = {
    apiRootUrl: "http://localhost:3001"
}

export const LocationBar = async () => {
    const locations: Location[] = await getAllLocations(context)
    console.log(locations)

    return (
        <div className='absolute inset-y-52 left-0 rounded-r-lg
                        w-20 transition-all ease-in-out duration-150 hover:w-80
                        group'>
            <SideBar>
                <div className="hidden group-hover:block">
                    <SearchLocation/>
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p>부대 바꾸기</p>
                </div>
            </SideBar>
        </div>
    )
}