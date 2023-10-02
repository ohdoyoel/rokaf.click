import Image from 'next/image'

interface CharacterImageProps {
    imageSource: string;
    size?: number;
}

export const CharacterImage = ({imageSource, size}: CharacterImageProps) => {
    return (
        <img // change this to Image when build next app
        className='transition ease-in-out duration-150 hover:scale-110 active:scale-105'
        src={imageSource}
        alt={imageSource}
        width={size}
        height={size}
        />
    )
}