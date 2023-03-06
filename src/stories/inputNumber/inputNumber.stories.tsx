import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { InputNumber } from './inputNumbe';

export default {
  title: 'Example/Input',
  component: InputNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputNumber>;


const Template: ComponentStory<typeof InputNumber> = (args) => <InputNumber {...args} />;

export const inputNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
inputNumber.args = {
};
