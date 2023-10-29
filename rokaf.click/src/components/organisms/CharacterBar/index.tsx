import { Dispatch, SetStateAction } from "react"
import { SideBar } from "@/src/components/atoms/SideBar"
import { SelectCharacter } from "@/src/components/molecules/SelectCharacter"

interface CharacterBarProps {
    setImageId: Dispatch<SetStateAction<number>>
}

export const CharacterBar = ({setImageId}: CharacterBarProps) => {
    return (
        <div className='absolute inset-y-36 right-0 rounded-l-lg
                        w-20 transition-all ease-in-out duration-150 hover:w-1/3
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
                    <SelectCharacter setImageId={setImageId}/>
                </div>
            </SideBar>
        </div>
    )
}