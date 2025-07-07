import type { Meta, StoryObj } from '@storybook/react-vite'

import { Container as ContainerComp } from './container'

const meta: Meta<typeof ContainerComp> = {
  component: ContainerComp
}

export default meta
type Story = StoryObj<typeof ContainerComp>

export const Container: Story = {
  render: () => (
    <ContainerComp>
      <p>Test</p>
    </ContainerComp>
  )
}
