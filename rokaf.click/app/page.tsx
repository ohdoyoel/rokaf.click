'use client'

import { useState } from 'react'
import { Header } from '@/src/components/atoms/Header'
import { CharacterButtonWithScore } from '@/src/components/organisms/CharacterButtonWithScore'
import { LocationBar } from '@/src/components/organisms/LocationBar'
import { CharacterBar } from '@/src/components/organisms/CharacterBar'
import { RankingBar } from '@/src/components/organisms/RankingBar'

export default function Home() {
  const [imageId, setImageId] = useState(1)
  const [locationId, setLocationId] = useState(0)
  console.log(`locationId: ${locationId}`)

  return (
    <main id="root" className="flex flex-col items-center justify-between w-screen h-screen pt-12 pb-24">
      <Header/>
      <LocationBar setLocationId={setLocationId}/>
      <CharacterButtonWithScore
        id={imageId}
        locationId={locationId}
      />
      <CharacterBar setImageId={setImageId}/>
      <RankingBar locationId={locationId}/>
      <div/>
    </main>
  )
}
