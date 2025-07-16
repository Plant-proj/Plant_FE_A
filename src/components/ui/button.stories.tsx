import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' }
    },
  }
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' }
    },
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' }
    },
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' }
    },
  }
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' }
    },
  }
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
    size: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' }
    },
  }
}
