'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CharacterButton } from "@/src/components/molecules/CharacterButton";
import { Score } from "@/src/components/atoms/Score";
import { Api } from '@/src/types/data';
import axios from 'axios';

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
    const [locationScore, setLocationScore] = useState(-1000)

    // const fetchLocationScore = async () => {
    //     try {
    //         const response = await axios.get(
    //             context.apiRootUrl + `/locations/${locationId}`,
    //         );
    //         setLocationScore(response.data.score);
            
    //     } catch (e) {
    //         console.log(e)
    //     }
    // };

    const getLocationScore = async () => {
        try {
            const response = await axios.get(
                context.apiRootUrl + `/locations/${locationId}`,
            );
            return response.data.score;
        } catch (e) {
            console.log(e)
        }

        return null
    }

    const characterButtonClick = async () => {
        if (locationId == 0) {
            window.alert("부대를 선택해주세요!")
        } else {
            setScore(score + 1)

            setLocationScore(await getLocationScore())
            console.log(`locationScore: ${locationScore}`)

            // location's score + 1 on json server
            try {
                axios.patch(
                    context.apiRootUrl + `/locations/${locationId}`,
                    {"score": locationScore + 1}
                );
            } catch (e) {
                console.log(e)
            }  
        };
    }

    return (
        <div className='transition ease-in-out duration-150 hover:scale-110 active:scale-105 overflow-hidden'>
            <Score score={score}/>
            <CharacterButton id={id} size={size} onClick={characterButtonClick}/>
        </div>
    )
}