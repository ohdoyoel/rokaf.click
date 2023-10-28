import { RankingItem } from "@/src/components/atoms/RankingItem"
import { Location } from "@/src/types/data"
import { Dispatch, SetStateAction } from "react"

interface RankingListProps {
    rank: number
    setRank: Dispatch<SetStateAction<number>>
    sortedLocations: Location[]
    locationId: number
}

export const RankingList = ({rank, setRank, locationId, sortedLocations}: RankingListProps ) => {

    const listAllSortedLocations = () => {
        let rank = 1
        const result = []
        for (const location of sortedLocations) {
            result.push(<RankingItem rank={rank} id={location.id} logoSrc={location.logoSrc}
                                    name={location.name} score={location.score}
                        />)
            if (location.id == locationId) {setRank(rank)}
            rank++
        }
        return result
    }

    return (
        <div>
            <p>부대 랭킹 {locationId} {rank}</p>
            {listAllSortedLocations()}
        </div>
    )
}