import { RankingItem } from "@/src/components/atoms/RankingItem"
import { Location } from "@/src/types/data"

interface RankingListProps {
    sortedLocations: Location[]
    locationId: number
}

export const RankingList = ({locationId, sortedLocations}: RankingListProps ) => {

    const listAllSortedLocations = () => {
        const result = []
        for (const location of sortedLocations) {
            result.push(<RankingItem id={location.id} logoSrc={location.logoSrc}
                                        name={location.name} score={location.score}
                        />)
        }
        return result
    }

    return (
        <div>
            <p>부대 랭킹 {locationId}</p>
            {listAllSortedLocations()}
        </div>
    )
}