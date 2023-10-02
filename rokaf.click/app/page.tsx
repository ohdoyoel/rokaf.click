import { Header } from '@/components/Header'
// import { Score } from '@/components/Score'
import { CharacterButton } from '@/components/CharacterButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header/>
      {/* <Score/> */}
      <CharacterButton
      imageSource='/images/characters/01.png'
      size={400}
      />
    </main>
  )
}
