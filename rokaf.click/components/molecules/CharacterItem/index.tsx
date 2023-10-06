'use client'

import { CharacterButton } from "@/components/molecules/CharacterButton";
import characterNames from "@/public/docs/character-names.json"

interface CharacterItemProps {
    id: number;
    size?: number;
}

export const CharacterItem = ({id, size}: CharacterItemProps) => {
    return (
        <div className="flex flex-col hover:bg-gray-100">
            <CharacterButton id={id} size={size} onClick={() => console.log(id)}/>
            <p className="font-sans-medium text-center text-[12px]">{characterNames[id]}</p>
        </div>
    )
}