import { LogoImage } from "../LogoImage";

interface RankingItemProps {
    id: number
    name: string
    score: number
    logoSrc: string
}

export const RankingItem = ({id, name, score, logoSrc}:RankingItemProps) => {
    const rank = 1 // rank from id
    return (
            <div className="relative
                            flex items-center w-9/12 h-10 pl-2 rounded hover:bg-gray-100
                            transition-all ease-in-out duration-150 hover:scale-105">
                <p className="px-5">{rank}</p>
                <LogoImage logoSrc={logoSrc} size={30}/>
                <p className="px-5">{name}</p>
                <p className="px-5 absolute right-0">{score}</p>
            </div>
    )
}