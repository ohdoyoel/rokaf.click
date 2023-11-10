'use client'

import { Dispatch, SetStateAction, useEffect, useState, useRef, useLayoutEffect, RefObject, ForwardedRef } from 'react'
import { CharacterButton } from "@/src/components/molecules/CharacterButton";
import { Score } from "@/src/components/atoms/Score";

interface CharacterButtonWithScoreProps {
    id: number;
    locationId : number
    _setScore: Dispatch<SetStateAction<number>>
}

export const CharacterButtonWithScore = ({id, locationId, _setScore}: CharacterButtonWithScoreProps) => {
    const [score, setScore] = useState(0)
    const [size, setSize] = useState(0)
    
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
      setScore(0)
    }, [locationId])
    
    const characterButtonClick = async () => {
        if (locationId == 0) {
            window.alert("부대를 선택해주세요")
        } else {
            setScore(score + 1)
            _setScore(score + 1)
        }
    }

    return (
        <div className={`transition ease-in-out duration-150 hover:scale-110 active:scale-105
                        translate-y-5 active:translate-y-8 ${locationId == 0 ? `opacity-50` : `opacity-100`}`}>
            <Score score={score}/>
            <CharacterButton id={id} size={size} onClick={characterButtonClick}/>
        </div>
    )
}