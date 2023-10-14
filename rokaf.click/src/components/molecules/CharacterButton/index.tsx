import { CharacterImage } from "../../atoms/CharacterImage";

interface CharacterButtonProps {
    id: number;
    size?: number;
    onClick?: () => void;
}

export const CharacterButton = ({id, size, onClick}: CharacterButtonProps) => {
    return (
        <button onClick={onClick}>
            <CharacterImage id={id} size={size}/>
        </button>
    )
}