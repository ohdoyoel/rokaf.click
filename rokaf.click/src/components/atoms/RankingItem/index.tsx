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
                            items-center w-full h-10 pl-2 rounded hover:bg-gray-100
                            transition ease-in-out duration-150
                            hover:scale-[1.06] active:scale-[1.03]
                            flex">
                <p className="text-sm px-8 w-12">
                                {(rank == 1) ? '🥇' : ((rank == 2) ? '🥈' : (rank == 3) ? '🥉' : rank)}
                </p>
                <LogoImage logoSrc={logoSrc} size={30}/>
                <div className="grid grid-cols-3 place-items-center w-full">
                    <p className="place-self-start col-span-2 text-sm px-4">{name}</p>
                    <p className="place-self-end text-sm text-right px-8">{score}</p>
                </div>
            </div>
    )
}