'use client'

import { useState } from 'react'
import { CharacterButton } from "@/components/molecules/CharacterButton";
import { Score } from "@/components/atoms/Score";

interface CharacterButtonWithScoreProps {
    imageSource: string;
    size: number;
}

// score update code needed

export const CharacterButtonWithScore = ({imageSource, size}: CharacterButtonWithScoreProps) => {
    const [score, setScore] = useState(0)
    const characterButtonClick = () => {
        setScore(score + 1)
        // location's score + 1 on ranking bar
        // location's score + 1 on json server
    }

    return (
        <div className='transition ease-in-out duration-150 hover:scale-110 active:scale-105 overflow-hidden'>
        <Score score={score}/>
        <CharacterButton imageSource={imageSource} size={size} onClick={characterButtonClick}/>
        </div>
    )
}