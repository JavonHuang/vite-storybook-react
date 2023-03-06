import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { Input } from './input';

export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => { 
  const [ value, setvalue ] = useState<any>();
  setTimeout(() => { setvalue(1)},5000)
  return <Input {...args} defaultValue={9898} />
};

export const base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
base.args = {
};
