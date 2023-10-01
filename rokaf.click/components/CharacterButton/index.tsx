interface CharacterButtonProps {
    imageSource?: string;
    onClick?: () => void;
}

export const CharacterButton = ({
    imageSource = '/images/characters/01.png',
    ...props
}: CharacterButtonProps) => {
    return (
        <button>
            <img src={imageSource} width={500} height={500}/>
        </button>
    )
}