import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label as LabelComp } from './label'

const meta: Meta<typeof LabelComp> = {
  component: LabelComp,
}

export default meta
type Story = StoryObj<typeof LabelComp>

export const Label: Story = {
  args: {
    children: 'Label',
  }
}
