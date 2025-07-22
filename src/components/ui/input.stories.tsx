import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input as InputComp } from './input'

const meta: Meta<typeof InputComp> = {
  component: InputComp,
}

export default meta
type Story = StoryObj<typeof InputComp>

export const Input: Story = {
  args: {
    placeholder: 'Placeholder',
  }
}
