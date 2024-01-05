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
  const [locationId, setLocationId] = useState(0)
  const locationIdRef = useRef(0)
  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)
  // const locationScoreRef = useRef(-1000)
  const promptRef = useRef(false)

  useEffect(() => {
    scoreRef.current = score
  }, [score])

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
      } finally {
        scoreRef.current = 0;
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
        id={imageId}
        locationId={locationId}
        _setScore={setScore}
      />
      <LocationBar locationId={locationId} setLocationId={setLocationId}/>
      <CharacterBar setImageId={setImageId}/>
      <RankingBar locationId={locationId} score={score}/>
      <Card/>
      <Statistics/>
      <div/>
    </main>
  )
}
