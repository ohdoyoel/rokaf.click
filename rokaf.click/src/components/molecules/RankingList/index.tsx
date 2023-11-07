import { RankingItem } from "@/src/components/atoms/RankingItem"
import { Location } from "@/src/types/data"
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from "react"

interface RankingListProps {
    rank: number
    setRank: Dispatch<SetStateAction<number>>
    sortedLocations: Location[]
    locationId: number
    score: number
}

export const RankingList = ({rank, setRank, sortedLocations, locationId, score}: RankingListProps ) => {
    const [list, setList] = useState<React.JSX.Element[]>([])

    const listAllSortedLocations = () => {
        // console.log(`ranking list build`)
        let rank = 1
        const result = []
        for (const location of sortedLocations) {
            result.push(<RankingItem key={location.id} rank={rank} id={location.id} logoSrc={location.logoSrc}
                                    name={location.name} score={location.score}
                        />)
            if (location.id == locationId) {
                setRank(rank)
            }
            rank++
        }
        return result
    }

    useEffect(() => {
        (rank != 0) && sortedLocations[rank - 1].score++
        while ((rank > 1) && sortedLocations[rank - 1].score > sortedLocations[rank - 2].score) {
            var temp;
            temp = sortedLocations[rank - 1].logoSrc
            sortedLocations[rank - 1].logoSrc = sortedLocations[rank - 2].logoSrc
            sortedLocations[rank - 2].logoSrc = temp
            temp = sortedLocations[rank - 1].name
            sortedLocations[rank - 1].name = sortedLocations[rank - 2].name
            sortedLocations[rank - 2].name = temp
            temp = sortedLocations[rank - 1].score
            sortedLocations[rank - 1].score = sortedLocations[rank - 2].score
            sortedLocations[rank - 2].score = temp
            temp = sortedLocations[rank - 1].id
            sortedLocations[rank - 1].id = sortedLocations[rank - 2].id
            sortedLocations[rank - 2].id = temp

            setRank(rank - 1)
            // console.log(rank)
        }
    }, [score])

    useEffect(() => {
        setList(listAllSortedLocations())
    }, [sortedLocations, locationId, score])

    return (
        <div className="flex flex-col items-start">
            <div className="w-full grid grid-cols-3 gap-1 items-center">
                <p className="text-xl text-left">🏅 리더보드</p>
                <div className="col-span-2">
                    {rank == 0
                    ? <p className="text-sm text-right">부대를 선택해주세요</p>
                    : <RankingItem rank={rank} id={locationId} logoSrc={sortedLocations[rank - 1].logoSrc}
                                    name={sortedLocations[rank - 1].name} score={sortedLocations[rank - 1].score}/>
                    }
                </div>
            </div>
            <ul id="locationList" className="h-full w-full p-1 overflow-x-hidden overflow-y-auto text-sm text-gray-700">
                {list}
            </ul>
        </div>
    )
}