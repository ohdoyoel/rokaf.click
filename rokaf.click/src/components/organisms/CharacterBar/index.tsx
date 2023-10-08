import { Dispatch, SetStateAction } from "react"
import { SideBar } from "@/src/components/atoms/SideBar"
import { SelectCharacter } from "@/src/components/molecules/SelectCharacter"

interface CharacterBarProps {
    setImageId: Dispatch<SetStateAction<number>>
}

export const CharacterBar = ({setImageId}: CharacterBarProps) => {
    return (
        <div className='absolute inset-y-52 right-0 rounded-l-lg
                        w-20 transition-all ease-in-out duration-150 hover:w-80
                        group'>
            <SideBar>
                <div className="hidden group-hover:block">
                    <SelectCharacter setImageId={setImageId}/>
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p>캐릭터 바꾸기</p>
                </div>
            </SideBar>
        </div>
    )
}