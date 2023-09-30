import { Meta } from '@storybook/react'
import { Header } from './index'

export default { title: 'components/Header' } satisfies Meta<typeof Header>

export const standard = () => (
    <div className='font-sans-medium'>
        <Header/>
    </div>
)