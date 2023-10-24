'use client'

import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react'
import { CharacterButton } from "@/src/components/molecules/CharacterButton";
import { Score } from "@/src/components/atoms/Score";
import axios from 'axios';

interface CharacterButtonWithScoreProps {
    id: number;
    locationId : number
    size: number;
}

export const CharacterButtonWithScore = ({id, locationId, size}: CharacterButtonWithScoreProps) => {
    const [score, setScore] = useState(0)
    const scoreRef = useRef(0)
    const [locationScore, setLocationScore] = useState(-1000)
    const locationScoreRef = useRef(-1000)
    
    useEffect(() => {
        locationId != 0 && getLocationScore()
        setScore(0)
    }, [locationId])
    
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
    
    const patchLocationScore = async (sum: number) => {
        try {
            axios.patch(
                process.env.NEXT_PUBLIC_API_BASE_PATH + `locations/${locationId}`,
                {"score": sum}
                )
            } catch (e) {
            console.log(e)
        }
    }
    
    // patch onbeforeunload
    scoreRef.current = score
    locationScoreRef.current = locationScore
    window.addEventListener("beforeunload", (event) => {
        console.log(`locationScore: ${locationScoreRef.current}, score: ${scoreRef.current}`)
        locationId != 0 && patchLocationScore(locationScoreRef.current + scoreRef.current);
    });
    
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