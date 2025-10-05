import { SideBar } from "@/src/components/atoms/SideBar"
import { SearchLocation } from "@/src/components/molecules/SearchLocation"
import { Location } from "@/src/types/data"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { supabase } from '@/app/lib/initSupabase';

interface LocationBarProps {
    locationId: number
    setLocationId: Dispatch<SetStateAction<number>>
}

export const LocationBar = ({setLocationId, locationId}: LocationBarProps) => {
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchLocations = async () => {
        try {
            setError(false);
            setLoading(true);
            let { data: locations, error } = await supabase
                .from('locations')
                .select('*')
                .order('id', {ascending: true})
            locations && setLocations(locations)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchLocations();
    }, []);

    return (
        <div className='absolute inset-y-36 left-0 rounded-r-lg
                        w-12 sm:w-16 md:w-20 transition-all ease-in-out duration-150 hover:w-2/3 sm:hover:w-1/2 lg:hover:w-1/3
                        group'>
            <SideBar isLocationBar={true}>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p className="text-3xl text-center pb-3">🏕️</p>
                    <p className="font-medium text-3xl text-center">부</p>
                    <p className="font-medium text-3xl text-center pb-3">대</p>
                    <p className="font-medium text-3xl text-center">선</p>
                    <p className="font-medium text-3xl text-center">택</p>
                </div>
                <div className="hidden group-hover:block">
                    <SearchLocation locationId={locationId} setLocationId={setLocationId} locations={locations}/>
                    {loading && <div>로딩중..</div>}
                    {error && <div>에러가 발생했습니다</div>}
                </div>
            </SideBar>
        </div>
    )
}