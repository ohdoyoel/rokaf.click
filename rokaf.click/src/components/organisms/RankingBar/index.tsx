import { BottomBar } from "@/src/components/atoms/BottomBar"
import { RankingList } from "@/src/components/molecules/RankingList"
import { Location } from "@/src/types/data"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface RankingBarProps {
    locationId: number
}

export const RankingBar = ({locationId}: RankingBarProps) => {
    const [sortedLocations, setSortedLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchSortedLocations = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_API_BASE_PATH + "locations",
                );
                setSortedLocations(response.data);
            } catch (e) {
                setError(true)
            }
            setLoading(false)
        };
        fetchSortedLocations();
    }, []);

    return (
        <div className='absolute inset-x-1/4 bottom-0
                        h-20 transition-all ease-in-out duration-150 hover:h-4/5
                        group'>
            <BottomBar>
                <div className="hidden group-hover:block">
                    <RankingList locationId={locationId} sortedLocations={sortedLocations}/>
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p>부대 랭킹 {locationId}</p>
                </div>
            </BottomBar>
        </div>
    )
}