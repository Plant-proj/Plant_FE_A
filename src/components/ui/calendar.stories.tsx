import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from './calendar'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  args: {
    mode: 'single',
    selected: new Date()
  }
}

export const CaptionLabelHidden: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
    hideCaptionLabel: true
  }
}
