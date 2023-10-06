import { SideBar } from "@/components/atoms/SideBar"
import { SearchLocation } from "@/components/molecules/SearchLocation"

export const LocationBar = () => {
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
                    <p className="font-slab-bold">
                        부대 바꾸기
                    </p>
                </div>
            </SideBar>
        </div>
    )
}