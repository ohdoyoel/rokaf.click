import { Dispatch, SetStateAction } from "react";
import { CharacterButton } from "@/components/molecules/CharacterButton";
import characterNames from "@/public/docs/character-names.json"

interface CharacterItemProps {
    id: number;
    size?: number;
    setImageId: Dispatch<SetStateAction<number>>;
}

export const CharacterItem = ({id, size, setImageId}: CharacterItemProps) => {
    return (
        <div className="p-2
                        transition ease-in-out duration-150
                        hover:bg-gray-100 hover:scale-110 active:scale-105">
            <CharacterButton id={id} size={size} onClick={() => setImageId(id)}/>
            <p className="font-sans-medium text-center text-[12px]">{characterNames[id-1]}</p>
        </div>
    )
}