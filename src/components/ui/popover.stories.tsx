import type { Meta, StoryObj } from '@storybook/react-vite'

import { Popover as PopoverComp, PopoverContent, PopoverTrigger } from './popover'

const meta: Meta<typeof PopoverComp> = {
  component: PopoverComp,
  subcomponents: { PopoverContent, PopoverTrigger },
}

export default meta
type Story = StoryObj<typeof PopoverComp>

export const Popover: Story = {
  render: () => (
    <PopoverComp>
      <PopoverTrigger>
        <button>Open Popover</button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Test</p>
      </PopoverContent>
    </PopoverComp>
  )
}
