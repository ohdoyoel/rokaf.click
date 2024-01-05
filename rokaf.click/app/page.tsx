'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Header } from '@/src/components/atoms/Header'
import { CharacterButtonWithScore } from '@/src/components/organisms/CharacterButtonWithScore'
import { LocationBar } from '@/src/components/organisms/LocationBar'
import { CharacterBar } from '@/src/components/organisms/CharacterBar'
import { RankingBar } from '@/src/components/organisms/RankingBar'
import { Card } from '@/src/components/atoms/Card'
import { Statistics } from '@/src/components/atoms/Statistics'
import { supabase } from './lib/initSupabase'

export default function Home() {
  const [imageId, setImageId] = useState(1)
  const [imageIdLimit, setImageIdLimit] = useState(1)
  const [locationId, setLocationId] = useState(0)
  const locationIdRef = useRef(0)
  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)
  // const locationScoreRef = useRef(-1000)
  const promptRef = useRef(false)
//   const clickStep = [2,
//                     3, 4, 5, 6, 7, 8, 9, 10, 11,
//                     12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//                     22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
//                     32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
//                     47, 48, 49, 50, 51, 52, 53, 54,
//                     Infinity]
  const clickStep = [10, 50,
                    100, 200, 300, 400, 500, 600, 700, 800, 900,
                    1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800,
                    3000, 3300, 3600, 3900, 4200, 4500, 4800, 5100, 5400, 5700,
                    6000, 6400, 6800, 5200, 5600, 6000, 6400, 6800, 7200, 7600, 8000, 8400, 8800, 9200, 9600,
                    10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500,
                    Infinity]

  const clickToLimit = (click: number) => {
    console.log(clickStep)
    let res = 0
    for (let i = 0; i < clickStep.length; ++i) {
      if (clickStep[i] > click + 1) {
        res = i
        break
      }
    }
    return res + 1
  }

  useEffect(() => {
    const _limit = clickToLimit(scoreRef.current)
    imageIdLimit < _limit && setImageIdLimit(_limit)
  }, [scoreRef.current])

  useEffect(() => {
    scoreRef.current = score
  }, [score])

  useEffect(() => {
    setImageId(imageIdLimit)
  }, [imageIdLimit])

  // as location id change, call getLocationScore
  useEffect(() => {
    scoreRef.current = 0
    locationIdRef.current = locationId
    // locationIdRef.current != 0 && getLocationScore(locationIdRef.current)
  }, [locationId])
  
  // post location score
  const postLocationScore = async (_id: number) => {
      try {
        const { data, error } = await supabase
          .rpc('update_location_score', { rowid: _id, click: scoreRef.current })
      } catch (e) {
          console.log(e)
      }
  }

  // as location id change, call postLocationScore
  useLayoutEffect(() => {
      locationIdRef.current != 0 && postLocationScore(locationIdRef.current)
  }, [locationId])
  
  // post onbeforeunload && post by 5 seconds
  useEffect(() => {
    const handleOnBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!promptRef.current) {
        promptRef.current = true;
        locationIdRef.current != 0 && postLocationScore(locationIdRef.current);
      }
      event.preventDefault()
      return (event.returnValue = '')
    }
    if (typeof window != "undefined") {
      window.addEventListener("beforeunload", handleOnBeforeUnload, {capture: true});
      return () => {window.removeEventListener("beforeunload", handleOnBeforeUnload, {capture: true})}
    }
  }, [])

  return (
    <main id="root" className="flex flex-col items-center justify-between w-screen h-screen pt-16 pb-24">
      <Header/>
      <CharacterButtonWithScore
        next={imageIdLimit < clickStep.length ? clickStep[imageIdLimit - 1] : -1}
        id={imageId <= 54 ? imageId : 54}
        locationId={locationId}
        _setScore={setScore}
      />
      <LocationBar locationId={locationId} setLocationId={setLocationId}/>
      <CharacterBar limit={imageIdLimit} setImageId={setImageId}/>
      <RankingBar locationId={locationId} score={score}/>
      <Card/>
      <Statistics/>
      <div/>
    </main>
  )
}
