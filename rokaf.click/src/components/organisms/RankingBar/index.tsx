import { BottomBar } from "@/src/components/atoms/BottomBar"
import { RankingList } from "@/src/components/molecules/RankingList"
import { RankingItem } from "@/src/components/atoms/RankingItem"
import { Location } from "@/src/types/data"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface RankingBarProps {
    locationId: number
    score: number
}

export const RankingBar = ({locationId, score}: RankingBarProps) => {
    const [sortedLocations, setSortedLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [rank, setRank] = useState(0)

    const [logoSrc, setLogoSrc] = useState('')
    const [name, setName] = useState('')
    const [locationScore, setLocationScore] = useState(0)

    useEffect(() => {
        setLocationScore(locationScore + 1)
    }, [score])

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

    useEffect(() => {
        if (sortedLocations.length != 0 && rank != 0) {
            setLogoSrc(sortedLocations[rank - 1].logoSrc)
            setName(sortedLocations[rank - 1].name)
            setLocationScore(sortedLocations[rank - 1].score)
        }
    }, [rank, sortedLocations])

    return (
        <div className='absolute inset-x-1/4 bottom-0
                        h-20 transition-all ease-in-out duration-150 hover:h-4/5
                        group'>
            <BottomBar>
                <div className="group-hover:hidden h-full
                                grid grid-cols-3 gap-1 items-center">
                    <p className="text-3xl text-left">🏅 리더보드</p>
                    <div className="col-span-2 px-2">
                        {rank == 0
                        ? <p className="text-xl text-right">부대를 선택해주세요</p>
                        : <RankingItem rank={rank} id={locationId} logoSrc={logoSrc}
                                        name={name} score={locationScore}/>
                        }
                    </div>
                </div>
                <div className="hidden group-hover:block">
                    <RankingList rank={rank} setRank={setRank} locationId={locationId} sortedLocations={sortedLocations} score={score}/>
                    {loading && <div>로딩중..</div>}
                    {error && <div>에러가 발생했습니다</div>}
                </div>
            </BottomBar>
        </div>
    )
}