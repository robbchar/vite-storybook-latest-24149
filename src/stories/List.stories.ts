import type { Meta, StoryObj } from '@storybook/react-vite';

import { List } from './List';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/List',
  component: List
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
    label: 'List',
  },
};
