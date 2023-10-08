import { Dispatch, SetStateAction } from "react";
import { CharacterItem } from "@/components/molecules/CharacterItem";

interface SelectImageProps {
    setImageId: Dispatch<SetStateAction<number>>
}

export const SelectCharacter = ({setImageId}:SelectImageProps) => {
    const CharacterList = () => {
        const result = []
        for (let i = 1; i < 55; i++) {
            result.push(<CharacterItem key={i} setImageId={setImageId} id={i} size={100}/>)
        }
        return result
    }

    return (
        <div>
            <p>캐릭터 바꾸기</p>
            <div className="flex flex-wrap justify-evenly items-center">
                {CharacterList()}
            </div>
        </div>
    )
}