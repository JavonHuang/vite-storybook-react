import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>默认</Button>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};

export const All = (args: any) => { 
  return <>
    <div style={{ marginTop: 16 }}>
      <Button>默认</Button>
      <Button type="primary">主要</Button>
      <Button type="success">成功</Button>
      <Button type="warning">警告</Button>
      <Button type="info">信息</Button>
      <Button type="danger">危险</Button>
  </div>
  </>
}