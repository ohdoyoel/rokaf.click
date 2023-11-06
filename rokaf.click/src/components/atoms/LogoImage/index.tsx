import Image from 'next/image'

interface LogoImageProps {
    logoSrc: string;
    size: number;
}

export const LogoImage = ({logoSrc, size}: LogoImageProps) => {
    const imageSource = `/images/logos/${logoSrc}`

    return (
        <img // change this to Image when build next app
        className='rounded-lg'
        src={imageSource}
        alt={imageSource}
        width={size}
        height={size}
        />
    )
}