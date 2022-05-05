import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'ボタン',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default1: ComponentStory<typeof Button> = () => (
  <Button>Click me</Button>
);
export const Default2: ComponentStory<typeof Button> = () => (
  <Button>Send</Button>
);
export const Default3: ComponentStory<typeof Button> = () => (
  <Button>Save</Button>
);
