import { Dispatch, SetStateAction } from "react";
import { CharacterItem } from "@/src/components/molecules/CharacterItem";

interface SelectImageProps {
    setImageId: Dispatch<SetStateAction<number>>
}

export const SelectCharacter = ({setImageId}:SelectImageProps) => {
    const CharacterList = () => {
        const characterCandidates = [1, 2, 9, 19, 20, 21, 24, 25, 26, 27, 47, 54]
        const result = []
        for (const i of characterCandidates) {
            result.push(<CharacterItem key={i} setImageId={setImageId} id={i} size={100}/>)
        }
        return result
    }

    return (
        <div className="flex flex-col items-start">
            <p className="text-xl text-center p-2">👚 캐릭터 바꾸기</p>
            <div className="flex flex-wrap justify-evenly items-center">
                {CharacterList()}
            </div>
        </div>
    )
}