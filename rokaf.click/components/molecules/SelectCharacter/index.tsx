import { CharacterItem } from "@/components/molecules/CharacterItem";

interface SelectCharacterProps {
}

export const SelectCharacter = ({} : SelectCharacterProps) => {
    const CharacterList = () => {
        const result = []
        for (let i = 1; i < 55; i++) {
            result.push(<CharacterItem id={i} size={100}/>)
        }
        return result
    }

    return (
        <div className="flex flex-wrap justify-evenly items-center">
            {CharacterList()}
        </div>
    )
}