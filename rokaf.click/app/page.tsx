'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Header } from '@/src/components/atoms/Header'
import { CharacterButtonWithScore } from '@/src/components/organisms/CharacterButtonWithScore'
import { LocationBar } from '@/src/components/organisms/LocationBar'
import { CharacterBar } from '@/src/components/organisms/CharacterBar'
import { RankingBar } from '@/src/components/organisms/RankingBar'
import axios from 'axios'

export default function Home() {
  const [imageId, setImageId] = useState(1)
  const [locationId, setLocationId] = useState(0)
  const locationIdRef = useRef(0)
  const [score, setScore] = useState(0)
  const scoreRef = useRef(0)
  const locationScoreRef = useRef(-1000)

  // get location score
  const getLocationScore = async (_id: number) => {
      let score: number = -999
      try {
          const response = await axios.get(
              process.env.NEXT_PUBLIC_API_BASE_PATH + `locations/${_id}`,
              )
              score = response.data.score
      } catch (e) {
          console.log(e)
      } finally {
          locationScoreRef.current = score
          // console.log(`GET id:${_id} score:${locationScoreRef.current}`)
      }
  }
      
  // as location id change, call getLocationScore
  useEffect(() => {
    scoreRef.current = 0
    locationIdRef.current = locationId
    locationIdRef.current != 0 && getLocationScore(locationIdRef.current)
  }, [locationId])
  
  // patch location score
  const patchLocationScore = async (_id: number) => {
      console.log(`PATCH id: ${_id} locationScore: ${locationScoreRef.current}, score: ${scoreRef.current}`)
      try {
          axios.patch(
              process.env.NEXT_PUBLIC_API_BASE_PATH + `locations/${_id}`,
              {"score": locationScoreRef.current + scoreRef.current}
          )
      } catch (e) {
          console.log(e)
      }
  }

  // as location id change, call patchLocationScore
  useLayoutEffect(() => {
      // console.log(locationIdRef.current)
      locationIdRef.current != 0 && patchLocationScore(locationIdRef.current)
  }, [locationId])
  
  // patch onbeforeunload
  scoreRef.current = score
  if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", (event) => {
          locationId != 0 && patchLocationScore(locationIdRef.current);
    });
  }

  return (
    <main id="root" className="flex flex-col items-center justify-between w-screen h-screen pt-16 pb-24">
      <Header/>
      <LocationBar locationId={locationId} setLocationId={setLocationId}/>
      <CharacterButtonWithScore
        id={imageId}
        locationId={locationId}
        _setScore={setScore}
      />
      <CharacterBar setImageId={setImageId}/>
      <RankingBar locationId={locationId}/>
      <div/>
    </main>
  )
}
