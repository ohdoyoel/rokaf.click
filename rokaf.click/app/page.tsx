import { Header } from '@/components/atoms/Header'
import { CharacterButtonWithScore } from '@/components/organisms/CharacterButtonWithScore'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header/>
      <CharacterButtonWithScore
      imageSource='/images/characters/01.png'
      size={400}
      />
    </main>
  )
}
