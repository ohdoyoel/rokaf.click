'use client'

import { Dispatch, SetStateAction, useEffect, useState} from 'react'
import { CharacterButton } from "@/src/components/molecules/CharacterButton";
import { Score } from "@/src/components/atoms/Score";

interface CharacterButtonWithScoreProps {
    next: number
    id: number
    locationId : number
    _setScore: Dispatch<SetStateAction<number>>
}

export const CharacterButtonWithScore = ({next, id, locationId, _setScore}: CharacterButtonWithScoreProps) => {
    const [score, setScore] = useState(0)
    const [size, setSize] = useState(0)
    const [ping, setPing] = useState(false)
    
    // responsive image size
    const resizeImage = () => {
        if (id == 45) { setSize(window.innerHeight / 4) }
        else { setSize(window.innerHeight / 3) }
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            resizeImage()
        }
    }, [id])
    if (typeof window !== "undefined") {
        window.addEventListener("resize", (event) => {
            resizeImage()
        });
    }

    useEffect(() => {
        let timer = setTimeout(() => setPing(false), 300)
        return () => {
            clearTimeout(timer)
            setPing(true)
        };
    }, [next, locationId])

    useEffect(() => {
      setScore(0)
    }, [locationId])
    
    const characterButtonClick = () => {
        if (locationId == 0) {
            window.alert("부대를 선택해주세요")
        } else {
            setScore(score + 1)
            _setScore(score + 1)
        }
    }

    return (
        <div className={`transition ease-in-out duration-150 hover:scale-110 active:scale-105
                        translate-y-5 active:translate-y-8 ${locationId == 0 ? `opacity-50` : `opacity-100`}
                        ${ping ? `animate-ping` : ``}
                        flex flex-col items-center`}>
            <Score score={score}/>
            <CharacterButton id={id} size={size} onClick={characterButtonClick}/>
            {next < 0
            ? <p className='text-center text-md'>모든 캐릭터 획득! 당신은 자랑스러운 공군인이에요</p>
            : <p className='text-center text-md'>다음 캐릭터 획득까지 {next - score} 클릭 남음</p>}
        </div>
    )
}