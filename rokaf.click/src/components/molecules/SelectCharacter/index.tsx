import { Dispatch, SetStateAction } from "react";
import { CharacterItem } from "@/src/components/molecules/CharacterItem";

interface SelectImageProps {
    limit: number
    setImageId: Dispatch<SetStateAction<number>>
}

export const SelectCharacter = ({limit, setImageId}:SelectImageProps) => {
    const CharacterList = () => {
        const result = []
        for (let i = 1; i <= limit; ++i) {
            if (i === 45) continue
            result.push(<CharacterItem key={i} setImageId={setImageId} id={i} size={80}/>)
        }
        return result
    }

    return (
        <div className="flex flex-col items-start">
            <p className="text-xl text-center p-2">👚 캐릭터 바꾸기</p>
            <div className="flex flex-wrap items-center justify-around">
                {CharacterList()}
            </div>
        </div>
    )
}