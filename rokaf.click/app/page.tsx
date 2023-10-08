'use client'

import { useState } from 'react'
import { Header } from '@/src/components/atoms/Header'
import { CharacterButtonWithScore } from '@/src/components/organisms/CharacterButtonWithScore'
import { LocationBar } from '@/src/components/organisms/LocationBar'
import { CharacterBar } from '@/src/components/organisms/CharacterBar'
import { RankingBar } from '@/src/components/organisms/RankingBar'

export default function Home() {
  const [imageId, setImageId] = useState<number>(1)
  const [locationId, setLocationId] = useState<number>(0)
  console.log(locationId)

  return (
    <main className="flex flex-col items-center justify-between w-screen h-screen pt-12 pb-24">
      <Header/>
      <LocationBar setLocationId={setLocationId}/>
      <CharacterButtonWithScore
        id={imageId}
        locationId={locationId}
        size={400}
      />
      <CharacterBar setImageId={setImageId}/>
      <RankingBar/>
      <div/>
    </main>
  )
}
