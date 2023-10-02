import { CharacterButton } from "@/components/molecules/CharacterButton";
import { Score } from "@/components/atoms/Score";

interface CharacterButtonWithScoreProps {
    imageSource: string;
    size?: number;
    onClick?: () => void;
}

// score update code needed

export const CharacterButtonWithScore = ({imageSource, size, onClick}: CharacterButtonWithScoreProps) => {
    return (
        <div>
        <Score score={777}/>
        <CharacterButton imageSource={imageSource} size={size} onClick={onClick}/>
        </div>
    )
}