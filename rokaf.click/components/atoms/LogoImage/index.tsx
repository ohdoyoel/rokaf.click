import Image from 'next/image'

interface LogoImageProps {
    logoId: number;
    size: number;
}

export const LogoImage = ({logoId, size}: LogoImageProps) => {
    // const imageSource = '/images/logos/' + ((logoId < 10) ? `0${logoId}` : `${logoId}`) + '.png' 
    // const imageSource = '/images/logos/01_공군본부.svg' 
    const imageSource = '/images/logos/10_공군검찰단.webp' 
    return (
        <img // change this to Image when build next app
        src={imageSource}
        alt={imageSource}
        width={size}
        height={size}
        />
    )
}