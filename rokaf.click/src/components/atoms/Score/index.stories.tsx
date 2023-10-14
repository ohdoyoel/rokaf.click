import { Meta } from '@storybook/react'
import { Score } from './index'

export default { title: 'components/atoms/Score' } satisfies Meta<typeof Score>

export const standard = () => <Score score={400}/>