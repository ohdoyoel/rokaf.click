import Image from 'next/image'

interface CharacterImageProps {
    id: number;
    size?: number;
}

export const CharacterImage = ({id, size}: CharacterImageProps) => {
    const imageSource = '/images/characters/' + ((id < 10) ? `0${id}` : `${id}`) + '.png' 
    return (
        <img // change this to Image when build next app
        // className="flex h-auto w-1/4"
        src={imageSource}
        alt={imageSource}
        width={size}
        height={size}
        />
    )
}