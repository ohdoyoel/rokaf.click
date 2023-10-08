'use client'

import { useEffect, useState } from 'react'
import { CharacterButton } from "@/src/components/molecules/CharacterButton";
import { Score } from "@/src/components/atoms/Score";
import { Api } from '@/src/types/data';

interface CharacterButtonWithScoreProps {
    id: number;
    locationId : number
    size: number;
}

const context: Api = {
    apiRootUrl: "https://3001-ohdoyoel-rokafclickback-4nlx9a00kq8.ws-us105.gitpod.io"
}

export const CharacterButtonWithScore = ({id, locationId, size}: CharacterButtonWithScoreProps) => {
    const [score, setScore] = useState(0)
    const characterButtonClick = () => {
        // location's score + 1 on json server
        if (locationId == 0) {
            window.alert("부대를 선택해주세요!")
        } else {
            setScore(score + 1)
            useEffect(() => {
                fetch(context.apiRootUrl + `/locations/${locationId}`,
                        {
                            method:'PATCH',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify({"score":score+1})
                        })
                    .then((res) => res.json())
            }, [score])

            // location's score + 1 on ranking bar
        }
    }

    return (
        <div className='transition ease-in-out duration-150 hover:scale-110 active:scale-105 overflow-hidden'>
            <Score score={score}/>
            <CharacterButton id={id} size={size} onClick={characterButtonClick}/>
        </div>
    )
}