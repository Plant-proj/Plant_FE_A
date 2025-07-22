import type { Meta, StoryObj } from '@storybook/react-vite'

import { Textarea as TextareaComp } from './textarea'

const meta: Meta<typeof TextareaComp> = {
  component: TextareaComp,
}

export default meta
type Story = StoryObj<typeof TextareaComp>

export const Textarea: Story = {
  args: {
    placeholder: 'Placeholder',
  }
}
