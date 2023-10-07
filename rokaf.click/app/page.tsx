'use client'

import { useState } from 'react'
import { Header } from '@/components/atoms/Header'
import { CharacterButtonWithScore } from '@/components/organisms/CharacterButtonWithScore'
import { LocationBar } from '@/components/organisms/LocationBar'
import { CharacterBar } from '@/components/organisms/CharacterBar'
import { RankingBar } from '@/components/organisms/RankingBar'

export default function Home() {
  const [imageId, setImageId] = useState<number>(1)
  
  return (
    <main className="flex flex-col items-center justify-between w-screen h-screen pt-12 pb-24">
      <Header/>
      <LocationBar/>
      <CharacterButtonWithScore
        id={imageId}
        size={400}
      />
      <CharacterBar setImageId={setImageId}/>
      <RankingBar/>
      <div/>
    </main>
  )
}
