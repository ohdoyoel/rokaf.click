import { SideBar } from "@/components/atoms/SideBar"
import { SelectCharacter } from "@/components/molecules/SelectCharacter"

export const CharacterBar = () => {
    return (
        <div className='absolute inset-y-52 right-0 rounded-l-lg
                        w-20 transition-all ease-in-out duration-150 hover:w-80
                        group'>
            <SideBar>
                <div className="hidden group-hover:block">
                    <SelectCharacter/>
                </div>
                <div className="group-hover:hidden
                                grid absolute inset-0 place-content-center">
                    <p className="font-slab-bold">
                        캐릭터 바꾸기
                    </p>
                </div>
            </SideBar>
        </div>
    )
}