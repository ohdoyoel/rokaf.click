'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
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
    const [locationScore, setLocationScore] = useState(-1000)

    const getLocationScore = async () => {
        let score: number = -999
        // console.log(locationScore, score)
        try {
            const response = await axios.get(
                process.env.NEXT_PUBLIC_API_BASE_PATH + `locations/${locationId}`,
            )
            score = response.data.score
        // console.log(locationScore, score)
        } catch (e) {
            console.log(e)
        } finally {
            setLocationScore(score)
        }
        // console.log(locationScore, score)
    }
    
    useEffect(() => {
        locationId != 0 && getLocationScore()
    }, [locationId])

    // patch locationScore to prevLocationScore + score
    // when 1 reloaded 2 closed

    const patchLocationScore = async () => {
        try {
            axios.patch(
                process.env.NEXT_PUBLIC_API_BASE_PATH + `locations/${locationId}`,
                {"score": locationScore + score}
            )
        } catch (e) {
            console.log(e)
        }
    }

    window.addEventListener("beforeunload", (event) => {
        locationId != 0 && patchLocationScore();
        console.log("API call before page reload");
    });
 
    // window.addEventListener("unload", (event) => {
    //     patchLocationScore();
    //     console.log("API call after page reload");
    // });
    
    const characterButtonClick = async () => {
        if (locationId == 0) {
            window.alert("부대를 선택해주세요!")
        } else {
            console.log(`id changed, locationScore: ${locationScore}`)
            setScore(score + 1)

            // location's score + 1 on json server
            // setLocationScore(await getLocationScore())
            // try {
            //     axios.patch(
            //         context.apiRootUrl + `/locations/${locationId}`,
            //         {"score": locationScore + 1}
            //     );
            //     } catch (e) {
            //         console.log(e)
            //     }
            // setLocationScore(await getLocationScore())
            // console.log(`locationScore: ${locationScore}`)

            // patchLocationScore()
        }
    }

    return (
        <div className='transition ease-in-out duration-150 hover:scale-110 active:scale-105 overflow-hidden'>
            <Score score={score}/>
            <CharacterButton id={id} size={size} onClick={characterButtonClick}/>
        </div>
    )
}