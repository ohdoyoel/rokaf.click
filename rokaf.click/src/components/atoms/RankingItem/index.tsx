import { LogoImage } from "../LogoImage";

interface RankingItemProps {
    rank: number
    id: number
    name: string
    score: number
    logoSrc: string
}

export const RankingItem = ({rank, name, score, logoSrc}:RankingItemProps) => {
    return (
            <div className="relative
                            flex items-center w-full h-10 pl-2 rounded hover:bg-gray-100
                            transition-all ease-in-out duration-150 hover:scale-105">
                <p className="px-5">{(rank == 1) ? '🥇' : ((rank == 2) ? '🥈' : (rank == 3) ? '🥉' : rank)}</p>
                <LogoImage logoSrc={logoSrc} size={30}/>
                <p className="px-5">{name}</p>
                <p className="px-5 absolute right-0">{score}</p>
            </div>
    )
}