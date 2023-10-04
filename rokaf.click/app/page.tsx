import { Header } from '@/components/atoms/Header'
import { CharacterButtonWithScore } from '@/components/organisms/CharacterButtonWithScore'
import { SideBar } from '@/components/atoms/SideBar'
import { LocationBar } from '@/components/molecules/LocationBar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-screen h-screen pt-12 px-0 pb-0">
      <Header/>
      <LocationBar />
      <CharacterButtonWithScore
        imageSource='/images/characters/01.png'
        size={400}
      />
      <div/>
    </main>
  )
}
