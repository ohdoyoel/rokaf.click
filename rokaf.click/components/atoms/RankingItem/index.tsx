import { LogoImage } from "../LogoImage";

interface RankingItemProps {
    id: number; // receive all data from parent looks better
}

export const RankingItem = ({id}:RankingItemProps) => {
    const rank = 1 // rank from id
    const name = "3여단 188대대 5포대" // name from id
    const logoId = 1 // logo id from id
    const score = 500 // score from id
    return (
            <div className="relative
                            flex items-center w-9/12 h-10 pl-2 rounded hover:bg-gray-100
                            transition-all ease-in-out duration-150 hover:scale-105">
                <p className="px-5">{rank}</p>
                <LogoImage logoId={logoId} size={30}/>
                <p className="px-5">{name}</p>
                <p className="px-5 absolute right-0">{score}</p>
            </div>
    )
}