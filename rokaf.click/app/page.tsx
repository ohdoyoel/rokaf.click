import { Header } from '@/components/atoms/Header'
import { CharacterButtonWithScore } from '@/components/organisms/CharacterButtonWithScore'
import { LocationBar } from '@/components/organisms/LocationBar'
import { CharacterBar } from '@/components/organisms/CharacterBar'
import { RankingBar } from '@/components/organisms/RankingBar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen h-screen pt-12 pb-24">
      <Header/>
      <LocationBar/>
      <CharacterButtonWithScore
        id={1}
        size={400}
      />
      <CharacterBar/>
      <RankingBar/>
      <div/>
    </main>
  )
}
