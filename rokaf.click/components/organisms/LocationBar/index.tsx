import { SideBar } from "@/components/atoms/SideBar"
import { SearchLocation } from "@/components/molecules/SearchLocation"

export const LocationBar = () => {
    return ( // responsive design needed
        <div className='absolute inset-y-52 left-0 rounded-r-lg'>
            <SideBar>
                <SearchLocation/>
            </SideBar>
        </div>
    )
}