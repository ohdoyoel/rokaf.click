import Image from 'next/image'

interface CharacterImageProps {
    imageSource: string;
    size?: number;
}

export const CharacterImage = ({imageSource, size}: CharacterImageProps) => {
    return (
        <img // change this to Image when build next app
        src={imageSource}
        alt={imageSource}
        width={size}
        height={size}
        />
    )
}