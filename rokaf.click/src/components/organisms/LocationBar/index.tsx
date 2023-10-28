import { SideBar } from "@/src/components/atoms/SideBar"
import { SearchLocation } from "@/src/components/molecules/SearchLocation"
import { Location } from "@/src/types/data"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface LocationBarProps {
    setLocationId: Dispatch<SetStateAction<number>>
}

export const LocationBar = ({setLocationId}: LocationBarProps) => {
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_API_BASE_PATH + "locations",
                );
                setLocations(response.data);
            } catch (e) {
                setError(true)
            }
            setLoading(false)
        };
        fetchLocations();
    }, []);

    return (
        <div className='absolute h-1/2 left-0 rounded-r-lg
                        w-20 transition-all ease-in-out duration-150 hover:w-1/4
                        group'>
            <SideBar>
                <div className="hidden group-hover:block">
                    <SearchLocation setLocationId={setLocationId} locations={locations}/>
                    {loading && <div>로딩중..</div>}
                    {error && <div>에러가 발생했습니다</div>}
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p className="text-3xl text-center pb-3">🏕️</p>
                    <p className="font-medium text-3xl text-center">부</p>
                    <p className="font-medium text-3xl text-center pb-3">대</p>
                    <p className="font-medium text-3xl text-center">선</p>
                    <p className="font-medium text-3xl text-center">택</p>
                </div>
            </SideBar>
        </div>
    )
}