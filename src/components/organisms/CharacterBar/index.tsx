import { Dispatch, SetStateAction } from "react"
import { SideBar } from "@/src/components/atoms/SideBar"
import { SelectCharacter } from "@/src/components/molecules/SelectCharacter"

interface CharacterBarProps {
    limit: number
    setImageId: Dispatch<SetStateAction<number>>
}

export const CharacterBar = ({limit, setImageId}: CharacterBarProps) => {
    return (
        <div className='absolute inset-y-36 right-0 rounded-l-lg
                        w-12 sm:w-16 md:w-20 transition-all ease-in-out duration-150 hover:w-2/3 sm:hover:w-1/2 lg:hover:w-1/3
                        group'>
            <SideBar isLocationBar={false}>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p className="text-3xl text-center pb-3">👚</p>
                    <p className="font-medium text-3xl text-center">캐</p>
                    <p className="font-medium text-3xl text-center">릭</p>
                    <p className="font-medium text-3xl text-center pb-3">터</p>
                    <p className="font-medium text-3xl text-center">선</p>
                    <p className="font-medium text-3xl text-center">택</p>
                </div>
                <div className="hidden group-hover:block">
                    <SelectCharacter limit={limit} setImageId={setImageId}/>
                </div>
            </SideBar>
        </div>
    )
}