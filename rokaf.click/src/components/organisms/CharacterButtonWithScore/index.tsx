'use client'

import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react'
import { CharacterButton } from "@/src/components/molecules/CharacterButton";
import { Score } from "@/src/components/atoms/Score";
import axios from 'axios';

interface CharacterButtonWithScoreProps {
    id: number;
    locationId : number
    size?: number;
}

export const CharacterButtonWithScore = ({id, locationId}: CharacterButtonWithScoreProps) => {
    const [score, setScore] = useState(0)
    const scoreRef = useRef(0)
    const [locationScore, setLocationScore] = useState(-1000)
    const locationScoreRef = useRef(-1000)
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

    // get location score
    const getLocationScore = async () => {
        let score: number = -999
        try {
            const response = await axios.get(
                process.env.NEXT_PUBLIC_API_BASE_PATH + `locations/${locationId}`,
                )
                score = response.data.score
            } catch (e) {
                console.log(e)
            } finally {
                setLocationScore(score)
            }
        }
        
    // as location id change, call getLocationScore
    useEffect(() => {
        locationId != 0 && getLocationScore()
        setScore(0)
    }, [locationId])

    // patch location score
    const patchLocationScore = async () => {
        try {
            axios.patch(
                process.env.NEXT_PUBLIC_API_BASE_PATH + `locations/${locationId}`,
                {"score": locationScoreRef.current + scoreRef.current}
                )
            } catch (e) {
            console.log(e)
        }
    }
    
    // patch onbeforeunload
    scoreRef.current = score
    locationScoreRef.current = locationScore
    if (typeof window !== "undefined") {
        window.addEventListener("beforeunload", (event) => {
            console.log(`locationScore: ${locationScoreRef.current}, score: ${scoreRef.current}`)
            locationId != 0 && patchLocationScore();
        });
    }
    
    const characterButtonClick = async () => {
        if (locationId == 0) {
            window.alert("부대를 선택해주세요!")
        } else {
            console.log(`locationScore: ${locationScore}, score: ${score}`)
            setScore(score + 1)
        }
    }

    return (
        <div className='transition ease-in-out duration-150 hover:scale-110 active:scale-105 overflow-hidden'>
            <Score score={score}/>
            <CharacterButton id={id} size={size} onClick={characterButtonClick}/>
        </div>
    )
}