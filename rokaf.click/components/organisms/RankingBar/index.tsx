import { BottomBar } from "@/components/atoms/BottomBar"
import { RankingList } from "@/components/molecules/RankingList"

export const RankingBar = () => {
    return (
        <div className='absolute inset-x-1/4 bottom-0
                        h-20 transition-all ease-in-out duration-150 hover:h-[46rem]
                        group'>
            <BottomBar>
                <div className="hidden group-hover:block">
                    <RankingList/>
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p>부대 랭킹</p>
                </div>
            </BottomBar>
        </div>
    )
}