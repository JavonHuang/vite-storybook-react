import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Col } from './Col';

export default {
  title: 'Example/Layout',
  component: Col,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Col>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Col> = (args) => <Col {...args}>默认</Col>;

export const col = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
col.args = {
};