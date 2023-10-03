import { Header } from '@/components/atoms/Header'
import { CharacterButtonWithScore } from '@/components/organisms/CharacterButtonWithScore'
import { SideBar } from '@/components/atoms/SideBar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-12 px-0 pb-0">
      <Header/>
      <div className='flex grow flex-row justify-between w-full'>
        <SideBar/>
        <CharacterButtonWithScore
          imageSource='/images/characters/01.png'
          size={400}
        />
        <SideBar/>
      </div>
      
    </main>
  )
}
