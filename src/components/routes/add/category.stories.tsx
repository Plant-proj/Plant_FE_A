import type { Meta, StoryObj } from '@storybook/react-vite'

import { Category as CategoryComp } from './category'

const meta: Meta<typeof CategoryComp> = {
  component: CategoryComp,
}

export default meta
type Story = StoryObj<typeof CategoryComp>

export const Category: Story = {
  render: ({ selected }) => (
    <CategoryComp name='Test Category' selected={selected}>
      <span className='text-lg'>🍔</span>
    </CategoryComp>
  ),
  args: {
    selected: false,
  }
}
