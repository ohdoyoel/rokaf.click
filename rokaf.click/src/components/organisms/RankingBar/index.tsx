import { BottomBar } from "@/src/components/atoms/BottomBar"
import { RankingList } from "@/src/components/molecules/RankingList"
import { RankingItem } from "@/src/components/atoms/RankingItem"
import { Location } from "@/src/types/data"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { supabase } from "@/app/lib/initSupabase"

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

    const fetchSortedLocations = async () => {
        try {
            setError(false);
            setLoading(true);
            let { data: sortedLocations, error } = await supabase
                .from('locations')
                .select('*')
                .order('score', { ascending: false });
            sortedLocations && setSortedLocations(sortedLocations)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
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
        <div className='absolute inset-x-4 sm:inset-x-16 md:inset-x-28 bottom-0
                        h-16 transition-all ease-in-out duration-150 hover:h-4/5
                        group'>
            <BottomBar>
                <div className="group-hover:hidden h-full
                                grid grid-cols-3 gap-1 items-center">
                    <p className="col-span-3 sm:col-span-1 text-3xl text-center sm:text-left">🏅 리더보드</p>
                    <div className="col-span-0 sm:col-span-2 px-2 invisible sm:visible">
                        {(rank == 0
                        ? <p className="text-xl text-right">부대를 선택해주세요</p>
                        : <RankingItem rank={rank} id={locationId} logoSrc={logoSrc}
                                        name={name} score={locationScore}/>)
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