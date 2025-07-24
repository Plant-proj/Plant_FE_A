import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select as SelectComp, SelectContent, SelectTrigger, SelectValue, SelectItem } from './select'

const meta: Meta<typeof SelectComp> = {
  component: SelectComp,
  subcomponents: { SelectContent, SelectTrigger, SelectValue, SelectItem },
}

export default meta
type Story = StoryObj<typeof SelectComp>

export const Select: Story = {
  render: () => (
    <SelectComp>
      <SelectTrigger>
        <SelectValue placeholder='Select an option' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='option1'>Option 1</SelectItem>
        <SelectItem value='option2'>Option 2</SelectItem>
        <SelectItem value='option3'>Option 3</SelectItem>
      </SelectContent>
    </SelectComp>
  )
}
