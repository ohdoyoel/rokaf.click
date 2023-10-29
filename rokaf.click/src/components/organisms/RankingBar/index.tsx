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
    const [rank, setRank] = useState(0)

    useEffect(() => {
        const fetchSortedLocations = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(
                    process.env.NEXT_PUBLIC_API_BASE_PATH + "locations/sort",
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
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p className="text-3xl text-center">🏅 리더보드 {locationId} {rank}</p>
                </div>
                <div className="hidden group-hover:block">
                    <RankingList rank={rank} setRank={setRank} locationId={locationId} sortedLocations={sortedLocations}/>
                    {loading && <div>로딩중..</div>}
                    {error && <div>에러가 발생했습니다</div>}
                </div>
            </BottomBar>
        </div>
    )
}