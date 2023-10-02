import { CharacterImage } from "../atoms/CharacterImage";

interface CharacterButtonProps {
    imageSource: string;
    size?: number;
    onClick?: () => void;
}

export const CharacterButton = ({imageSource, size, onClick}: CharacterButtonProps) => {
    return (
        <button onClick={onClick}>
            <CharacterImage imageSource={imageSource} size={size}/>
        </button>
    )
}