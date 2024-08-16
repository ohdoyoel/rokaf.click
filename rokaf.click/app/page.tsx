'use client'

import { useEffect, useRef, useState } from 'react'
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
  const [currentMiliseconds, setCurrentMiliseconds] = useState(0)
  const [recentClickedMiliseconds, setRecentClickedMiliseconds] = useState(0)
  const [needToUpdate, setNeedToUpdate] = useState(false)
  const scoreRef = useRef(0)
  const clickStep = [
                      10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
                      1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000,
                      3300, 3600, 3900, 4200, 4500, 4800, 5100, 5400, 5700, 6000,
                      6400, 6800, 7200, 7600, 8000, 8400, 8800, 9200, 9600, 10000,
                      10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, // 50
                      15000, 16000, 18000, 20000
                    ]
  // const clickStep = [
  //                     1,2,3,4,5,6,7,8,9,10,
  //                     11,12,13,14,15,16,17,18,19,20,
  //                     21,22,23,24,25,26,27,28,29,30,
  //                     31,32,33,34,35,36,37,38,39,40,
  //                     41,42,43,44,45,46,47,48,49,50,
  //                     51,52,53,54
  //                   ]
  
  //** input : click count -> output : image index (1~54) */
  const imageIndexFromClickCount = (clickCount: number) => {
    for (let i = 0; i < clickStep.length; ++i) if (clickCount < clickStep[i]) return i+1;
    return 54
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const curDate = new Date()
      setCurrentMiliseconds(curDate.getTime())
    }, 10)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (currentMiliseconds - recentClickedMiliseconds >= 500 && needToUpdate) {
      locationIdRef.current != 0 && postLocationScore(locationIdRef.current)
      console.log('post', scoreRef.current)
      scoreRef.current = 0
      setNeedToUpdate(false)
    }
  }, [currentMiliseconds])

  useEffect(() => {
    const _limit = imageIndexFromClickCount(score)
    console.log(_limit)
    imageIdLimit < _limit && setImageIdLimit(_limit)

    if (scoreRef.current != 0){
      setRecentClickedMiliseconds(currentMiliseconds)
      setNeedToUpdate(true)
    }
  }, [scoreRef.current])

  useEffect(() => {
    scoreRef.current++;
  }, [score])

  useEffect(() => {
    setImageId(imageIdLimit)
  }, [imageIdLimit])

  // as location id change, call getLocationScore
  useEffect(() => {
    scoreRef.current = 0
    locationIdRef.current = locationId
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

  return (
    <main id="root" className="flex flex-col items-center justify-between w-screen h-screen pt-16 pb-24">
      <Header/>
      <CharacterButtonWithScore
        nextScore={imageIdLimit <= 53 ? clickStep[imageIdLimit-1] : -1}
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
