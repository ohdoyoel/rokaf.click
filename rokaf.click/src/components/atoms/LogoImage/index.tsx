import Image from 'next/image'

interface LogoImageProps {
    logoSrc: string;
    size: number;
}

export const LogoImage = ({logoSrc, size}: LogoImageProps) => {
    // const imageSource = '/images/logos/' + ((logoId < 10) ? `0${logoId}` : `${logoId}`) + '.png' 
    const imageSource = `/images/logos/${logoSrc}`

    return (
        <img // change this to Image when build next app
        src={imageSource}
        alt={imageSource}
        width={size}
        height={size}
        />
    )
}