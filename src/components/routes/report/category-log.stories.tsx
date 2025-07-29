import type { Meta, StoryObj } from '@storybook/react-vite'

import { CategoryLog as CategoryLogComp } from './category-log'

const meta: Meta<typeof CategoryLogComp> = {
  component: CategoryLogComp,
}
export default meta

type Story = StoryObj<typeof meta>

export const CategoryLog: Story = {
  render: () => (
    <CategoryLogComp
      name='Test Category'
      money={1000}
      percent={50}
    />
  )
}
