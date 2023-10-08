import { Meta } from '@storybook/react'
import { CharacterButtonWithScore } from './index'

export default { title: 'components/organisms/CharacterButtonWithScore' } satisfies Meta<typeof CharacterButtonWithScore>

export const standard = () => <CharacterButtonWithScore imageSource='/images/characters/01.png' size={400}/>

// this doesn't work... i dnt know why
