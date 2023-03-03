import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { Input } from './input';

export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
base.args = {
};
