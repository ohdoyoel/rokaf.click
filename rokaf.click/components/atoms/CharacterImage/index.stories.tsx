import { Meta } from '@storybook/react'
import { CharacterImage } from './index'

export default { title: 'components/atoms/CharacterImage' } satisfies Meta<typeof CharacterImage>

export const character01 = () => <CharacterImage imageSource='/images/characters/01.png' size={400}/>